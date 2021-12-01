const dishRepo = require('./dish.memory.repository');

const getAll = () => dishRepo.getAll();
const getById = (id) => dishRepo.getById(id);
const createDish = ({ id, categoryId, description, title, photo, isPublish, ingredients, price }) =>
  dishRepo.createDish({ id, categoryId, description, title, photo, isPublish, ingredients, price });
const deleteById = (id) => dishRepo.deleteById(id);
const updateById = ({ id, categoryId, description, title, photo, isPublish, ingredients, price }) =>
  dishRepo.updateById({ id, categoryId, description, title, photo, isPublish, ingredients, price });

module.exports = { getAll, getById, createDish, deleteById, updateById };
