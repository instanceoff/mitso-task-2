const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Dish = require('./dish.model');
const dishesService = require('./dish.service');

// const router = require('express').Router({ mergeParams: true });
// const Dish = require('./dish.model');

// const dishesService = require('./dish.service');
const catchErrors = require('../../common/catchErrors');

// Вренет все блюда в системе
router.route('/').get(
  catchErrors(async (req, res) => {
    const dishes = await dishesService.getAll();

    res.json(dishes.map(Dish.toResponse));
  }),
);

// Вернет блюдо с заданным id
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const dish = await dishesService.getById(id);

    if (dish) {
      res.json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const dish = await dishesService.createDish({ id, title, photo, isPublish });

    if (dish) {
      res.status(StatusCodes.CREATED).json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const dish = await dishesService.updateById({ id, title, photo, isPublish });

    if (dish) {
      res.status(StatusCodes.OK).json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const dish = await dishesService.deleteById(id);

    if (dish) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'DISH_DELETED', msg: 'The dish has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

module.exports = router;
