import * as categoryRepo from './category.memory.repository';
import * as dishRepo from '../dishes/dish.memory.repository';
import { Category } from './category.model';

const getAll = () => categoryRepo.getAll();
const getById = (id: String) => categoryRepo.getById(id);
const createCategory = (
  id: String,
  menuId: String,
  title: String,
  photo: String,
  isVisible: Boolean,
) => categoryRepo.createCategory(id, menuId, title, photo, isVisible);
const deleteById = (id: String) => categoryRepo.deleteById(id);
const updateById = (id: String, menuId: String, title: String, photo: String, isVisible: Boolean) =>
  categoryRepo.updateById(id, menuId, title, photo, isVisible);
const getDishesById = (id: String) => dishRepo.getDishesById(id);

export { getAll, getById, getDishesById, createCategory, deleteById, updateById };
