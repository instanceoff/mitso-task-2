// const router = require('express').router;
// const { StatusCodes } = require('http-status-codes');
// const Dish = require('./dish.model');
// const dishesService = require('./dish.service');

// const router = require('express').Router({ mergeParams: true });
// const Dish = require('./dish.model');

// const dishesService = require('./dish.service');
// const catchErrors = require('../../common/catchErrors');
import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Dish } from './dish.model';
// import { Dish } from '../dish/dish.model';
import * as dishesService from './dish.service';

// import { TCategory, TCategoryModel } from './category.types';

import catchErrors from '../../common/catchErrors';

const router = Router();

// Вренет все блюда в системе
router.route('/').get(
  catchErrors(async (res: Response) => {
    const dishes = await dishesService.getAll();

    res.json(dishes.map(Dish.toResponse));
  }),
);

// Вернет блюда с заданным id
router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const dish = await dishesService.getById(id || '');

    if (dish) {
      res.json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    // const { id } = req.params;
    const { id, categoryId, description, title, photo, isPublish, ingredients, price } = req.body;
    const dish: Dish = await dishesService.createDish({
      id,
      categoryId,
      description,
      title,
      photo,
      isPublish,
      ingredients,
      price,
    });

    if (dish) {
      res.status(StatusCodes.CREATED).json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  }),
);

router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { categoryId, description, title, photo, isPublish, ingredients, price } = req.body;

    const dish = await dishesService.updateById({
      id: id || '',
      categoryId,
      description,
      title,
      photo,
      isPublish,
      ingredients,
      price,
    });

    if (dish) {
      res.status(StatusCodes.OK).json(Dish.toResponse(dish));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const dish = await dishesService.deleteById(id || '');

    if (dish) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'DISH_DELETED', msg: 'The dish has been deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'DISH_NOT_FOUND', msg: 'Dish not found' });
    }
  }),
);

export default router;
