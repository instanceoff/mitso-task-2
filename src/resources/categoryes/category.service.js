const usersRepo = require('./category.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
