import * as dishRepo from './dish.memory.repository';
import { TDish } from './dish.types';

const getAll = () => dishRepo.getAll();
const getById = (id: string) => dishRepo.getById(id);
const createDish = ({
  id,
  categoryId,
  description,
  title,
  photo,
  isPublish,
  ingredients,
  price,
}: TDish) =>
  dishRepo.createDish({ id, categoryId, description, title, photo, isPublish, ingredients, price });
const deleteById = (id: string) => dishRepo.deleteById(id);
const updateById = ({
  id,
  categoryId,
  description,
  title,
  photo,
  isPublish,
  ingredients,
  price,
}: TDish) =>
  dishRepo.updateById({ id, categoryId, description, title, photo, isPublish, ingredients, price });

export { getAll, getById, createDish, deleteById, updateById };
