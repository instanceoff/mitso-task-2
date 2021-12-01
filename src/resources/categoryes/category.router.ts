// import {Router} = require('express');
// import * as router from 'express';
// import * as categoryesService from './category.service';
// import * as Category from './category.model';

// const router = require('express').Router({ mergeParams: true });
// const Category = require('./category.model');

// const categoryesService = require('./category.service');

import { Router as router } from 'express';

import { StatusCodes } from 'http-status-codes';
import { Category } from './category.model';
import { Dish } from '../dishes/dish.model';
import * as categoryesService from './category.service';

const catchErrors = require('../../common/catchErrors');

// Вренет все меню в системе
router()
  .route('/')
  .get(
    catchErrors(async (req, res) => {
      const categoryes = await categoryesService.getAll();

      res.json(categoryes.map(Category.toResponse));
    }),
  );

// Вернет меню с заданным id
router()
  .route('/:id')
  .get(
    catchErrors(async (req, res) => {
      const { id } = req.params;

      const category: Category = await categoryesService.getById(id);

      if (category) {
        res.json(Category.toResponse(category));
      } else {
        res
          .status(StatusCodes.NOT_FOUND)
          .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
      }
    }),
  );

// Вернет все блюда связанные с категорией по id
router()
  .route('/:id/categories')
  .get(
    catchErrors(async (req, res) => {
      const { id } = req.params;

      const dishes: Dish = await categoryesService.getDishesById(id);

      if (dishes) {
        res.json(Dish.toResponse(dishes));
      } else {
        res
          .status(StatusCodes.NOT_FOUND)
          .json({ code: 'DISHES_NOT_FOUND', msg: 'Dishes not found' });
      }
    }),
  );

router()
  .route('/')
  .post(
    catchErrors(async (req, res) => {
      const { id } = req.params;
      const { title, menuId, photo, isVisible } = req.body;

      const category: Category = await categoryesService.createCategory(
        id,
        title,
        menuId,
        photo,
        isVisible,
      );

      if (category) {
        res.status(StatusCodes.CREATED).json(Category.toResponse(category));
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
      }
    }),
  );

router()
  .route('/:id')
  .put(
    catchErrors(async (req, res) => {
      const { id } = req.params;
      const { title, menuId, photo, isVisible } = req.body;

      const category: Category = await categoryesService.updateById(
        id,
        title,
        menuId,
        photo,
        isVisible,
      );

      if (category) {
        res.status(StatusCodes.OK).json(Category.toResponse(category));
      } else {
        res
          .status(StatusCodes.NOT_FOUND)
          .json({ code: 'CATEGORY_NOT_FOUND', msg: 'Category not found' });
      }
    }),
  );

router()
  .route('/:id')
  .delete(
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
