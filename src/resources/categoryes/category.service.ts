const categoryRepo = require('./category.memory.repository');
const dishRepo = require('../dishes/dish.memory.repository');

const getAll = () => categoryRepo.getAll();
const getById = (id) => categoryRepo.getById(id);
const createCategory = (
  id: String,
  menuId: String,
  title: String,
  photo: String,
  isVisible: Boolean,
) => categoryRepo.createCategory(id, menuId, title, photo, isVisible);
const deleteById = (id) => categoryRepo.deleteById(id);
const updateById = (id: String, menuId: String, title: String, photo: String, isVisible: Boolean) =>
  categoryRepo.updateById(id, menuId, title, photo, isVisible);
const getDishesById = (id) => dishRepo.getDishesById(id);

export { getAll, getById, getDishesById, createCategory, deleteById, updateById };
