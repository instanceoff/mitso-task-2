const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Сategory = require('./category.model');
const categoryesService = require('./category.service');

// const router = require('express').Router({ mergeParams: true });
// const Category = require('./category.model');

// const categoryesService = require('./category.service');
const catchErrors = require('../../common/catchErrors');

// Вренет все меню в системе
router.route('/').get(
  catchErrors(async (req, res) => {
    const categoryes = await categoryesService.getAll();

    res.json(categoryes.map(Сategory.toResponse));
  }),
);

// Вернет меню с заданным id
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const category = await categoryesService.getById(id);

    if (category) {
      res.json(Сategory.toResponse(category));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
    }
  }),
);

// Вернет все блюда связанные с категорией по id
router.route('/:id/categories').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const category = await categoryesService.getDishesById(id);

    if (category) {
      res.json(Сategory.toResponse(category));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const category = await categoryesService.createCategory({ id, title, photo, isPublish });

    if (category) {
      res.status(StatusCodes.CREATED).json(Сategory.toResponse(category));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const category = await categoryesService.updateById({ id, title, photo, isPublish });

    if (category) {
      res.status(StatusCodes.OK).json(Сategory.toResponse(category));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const category = await categoryesService.deleteById(id);

    if (category) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'CATEGORY_DELETED', msg: 'The category has been deleted' });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
    }
  }),
);

module.exports = router;
