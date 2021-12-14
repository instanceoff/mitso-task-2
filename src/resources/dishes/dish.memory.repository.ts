// const Dish = require('./dish.model');
import { TDish } from './dish.types';
import { Dish } from './dish.model';

const Dishes = [new Dish()];

const getAll = async () => Dishes;

const getById = async (id: string) => Dishes.find((dish) => dish.id === id);

const createDish = async ({
  id,
  categoryId,
  title,
  description,
  photo,
  isPublish,
  ingredients,
  price,
}: TDish) => {
  const dish = new Dish(id, categoryId, title, description, photo, isPublish, ingredients, price);
  Dishes.push(dish);
  return dish;
};

const getDishesById = async (id: String) => {
  const dishPosition = Dishes.findIndex((dish) => dish.categoryId === id);
  if (dishPosition === -1) return null;
  const dishes = Dishes[dishPosition];
  return dishes;
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
  title,
  description,
  photo,
  isPublish,
  ingredients,
  price,
}: TDish) => {
  const dishPosition = Dishes.findIndex((dish) => dish.id === id);

  if (dishPosition === -1) return null;

  const oldDish = Dishes[dishPosition];
  const newDish = {
    ...oldDish,
    id,
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
