const usersRepo = require('./menu.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
