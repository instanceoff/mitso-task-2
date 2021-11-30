const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const Menu = require('./menu.model');
const menusService = require('./menu.service');

// const router = require('express').Router({ mergeParams: true});
// const Menu = require('./menu.model');

// const menusService = require('./menu.service');
const catchErrors = require('../../common/catchErrors');

// Вренет все меню в системе
router.route('/').get(
  catchErrors(async (req, res) => {
    const menus = await menusService.getAll();

    res.json(menus.map(Menu.toResponse));
  }),
);

//  Вернет меню с заданным id
router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const menu = await menusService.getById(id);

    if (menu) {
      res.json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

// Вернет все категории связанные с меню по id
router.route('/:id/categories').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const menu = await menusService.getCategoryesById(id);

    if (menu) {
      res.json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const menu = await menusService.createMenu({ id, title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const menu = await menusService.updateById({ id, title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.OK).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const menu = await menusService.deleteById(id);

    if (menu) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'MENU_DELETED', msg: 'The menu has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

module.exports = router;
