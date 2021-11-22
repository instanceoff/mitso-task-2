const categoryRepo = require('./category.memory.repository');

const getAll = () => categoryRepo.getAll();
const getById = (id) => categoryRepo.getById(id);
const createCategory = ({ id, menuId, title, photo, isVisible }) =>
categoryRepo.createCategory({ id, menuId, title, photo, isVisible });
const deleteById = (id) => categoryRepo.deleteById(id);
const updateById = ({ id, menuId, title, photo, isVisible }) =>
categoryRepo.updateById({ id, menuId, title, photo, isVisible });

module.exports = { getAll, getById, createCategory, deleteById, updateById };