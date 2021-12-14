// const router = require('express').Router();
// const { StatusCodes } = require('http-status-codes');
// const Menu = require('./menu.model');
// const menusService = require('./menu.service');

// // const router = require('express').Router({ mergeParams: true});
// // const Menu = require('./menu.model');

// // const menusService = require('./menu.service');
// const catchErrors = require('../../common/catchErrors');

import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Menu } from './menu.model';
import { Category } from '../categoryes/category.model';
import * as menusService from './menu.service';

// import { TCategory, TCategoryModel } from './category.types';

import catchErrors from '../../common/catchErrors';

const router = Router();

// Вренет все меню в системе
router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const menus = await menusService.getAll();

    res.json(menus.map(Menu.toResponse));
  }),
);

//  Вернет меню с заданным id
router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const menu = await menusService.getById(id || '');

    if (menu) {
      res.json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

// Вернет все категории связанные с меню по id
router.route('/:id/categories').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const categoryes = await menusService.getCategoryesById(id || '');

    if (categoryes) {
      res.json(Category.toResponse(categoryes));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    const { id, title, photo, isPublish } = req.body;

    const menu = await menusService.createMenu({ id: id || '', title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, photo, isPublish } = req.body;

    const menu = await menusService.updateById({ id: id || '', title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.OK).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const menu = await menusService.deleteById(id || '');

    if (menu) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'MENU_DELETED', msg: 'The menu has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'MENU_NOT_FOUND', msg: 'Menu not found' });
    }
  }),
);

export default router;
