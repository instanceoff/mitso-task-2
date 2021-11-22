const Category = require('./category.model');
const Categoryes = [new Category()];

const getAll = async () => Categoryes;

const getById = async (id) => Categoryes.find((category) => category.id === id);

const createBoard = async ({ id, title, columns }) => {
  const category = new Category({ id, title, columns });
  Categoryes.push(category);
  return category;
};

const deleteById = async (id) => {
  const categoryPosition = Categoryes.findIndex((category) => category.id === id);

  if (categoryPosition === -1) return null;

  const categoryDeletable = Categoryes[categoryPosition];

  Categoryes.splice(categoryPosition, 1);
  return categoryDeletable;
};

const updateById = async ({ id, title, columns }) => {
  const categoryPosition = Categoryes.findIndex((category) => category.id === id);

  if (categoryPosition === -1) return null;

  const oldCategory = Categoryes[categoryPosition];
  const newCategory = { ...oldCategory, title, columns };

  Categoryes.splice(categoryPosition, 1, newCategory);
  return newCategory;
};

module.exports = {
  Boards,
  getAll,
  getById,
  createBoard,
  deleteById,
  updateById,
};

module.exports = { getAll };
