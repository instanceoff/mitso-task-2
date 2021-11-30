const Category = require('./category.model');

const Categoryes = [new Category()];

const getAll = async () => Categoryes;

const getById = async (id) => Categoryes.find((category) => category.id === id);

const getCategoryesById = async (id) => {
  Categoryes.find((category) => category.menuId === id);
};

const createCategory = async ({ id, menuId, title, photo, isVisible }) => {
  const category = new Category({ id, menuId, title, photo, isVisible });
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

const updateById = async ({ id, menuId, title, photo, isVisible }) => {
  const categoryPosition = Categoryes.findIndex((category) => category.id === id);

  if (categoryPosition === -1) return null;

  const oldCategory = Categoryes[categoryPosition];
  const newCategory = { ...oldCategory, menuId, title, photo, isVisible };

  Categoryes.splice(categoryPosition, 1, newCategory);
  return newCategory;
};

module.exports = {
  Categoryes,
  getAll,
  getById,
  getCategoryesById,
  createCategory,
  deleteById,
  updateById,
};
