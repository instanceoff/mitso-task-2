const menuRepo = require('./menu.memory.repository');

const getAll = () => menuRepo.getAll();
const getById = (id) => menuRepo.getById(id);
const createMenu = ({ id, title, photo, isPublish }) =>
menuRepo.createMenu({ id, title, photo, isPublish });
const deleteById = (id) => menuRepo.deleteById(id);
const updateById = ({ id, title, photo, isPublish }) =>
menuRepo.updateById({ id, title, photo, isPublish });

module.exports = { getAll, getById, createMenu, deleteById, updateById };