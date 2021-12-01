// const Dish = require('./dish.model');

import * as Dish from './dish.model';

const Dishes = [new Dish.Dish()];

const getAll = async () => Dishes;

const getById = async (id: String) => Dishes.find((dish) => dish.id === id);

const createDish = async (
  id: String,
  categoryId: String,
  title: String,
  description: String,
  photo: String,
  isPublish: Boolean,
  ingredients: String[],
  price: Number,
) => {
  const dish = new Dish.Dish(
    id,
    categoryId,
    title,
    description,
    photo,
    isPublish,
    ingredients,
    price,
  );
  Dishes.push(dish);
  return dish;
};

const getDishesById = async (id: String) => {
  Dishes.find((dish) => dish.categoryId === id);
};

const deleteById = async (id: String) => {
  const dishPosition = Dishes.findIndex((dish) => dish.id === id);

  if (dishPosition === -1) return null;

  const dishDeletable = Dishes[dishPosition];

  Dishes.splice(dishPosition, 1);
  return dishDeletable;
};

const updateById = async ({
  id,
  categoryId,
  description,
  title,
  photo,
  isPublish,
  ingredients,
  price,
}) => {
  const dishPosition = Dishes.findIndex((dish) => dish.id === id);

  if (dishPosition === -1) return null;

  const oldDish = Dishes[dishPosition];
  const newDish = {
    ...oldDish,
    categoryId,
    description,
    title,
    photo,
    isPublish,
    ingredients,
    price,
  };

  Dishes.splice(dishPosition, 1, newDish);
  return newDish;
};

export { Dishes, getAll, getDishesById, getById, createDish, deleteById, updateById };
