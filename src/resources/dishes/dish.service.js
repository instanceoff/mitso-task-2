const usersRepo = require('./dish.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
