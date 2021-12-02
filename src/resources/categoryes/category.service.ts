import * as categoryRepo from './category.memory.repository';
import * as dishRepo from '../dishes/dish.memory.repository';
import { Category } from './category.model';
import { TCategory, TCategoryModel } from './category.types';

const getAll = () => categoryRepo.getAll();
const getById = (id: string) => categoryRepo.getById(id);
const createCategory = ({ id, menuId, title, photo, isVisible }: TCategory) =>
  categoryRepo.createCategory({ id, menuId, title, photo, isVisible });
const deleteById = (id: string) => categoryRepo.deleteById(id);
const updateById = ({ id, menuId, title, photo, isVisible }: TCategory) =>
  categoryRepo.updateById({ id, menuId, title, photo, isVisible });
const getDishesById = (id: string) => dishRepo.getDishesById(id);

export { getAll, getById, getDishesById, createCategory, deleteById, updateById };
