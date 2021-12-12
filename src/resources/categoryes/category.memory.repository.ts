// const Category = require('./category.model');
import { TCategory } from './category.types';
import { Category } from './category.model';

const Categoryes = [new Category()];

const getAll = async () => Categoryes;

const getById = async (id: string) => Categoryes.find((category) => category.id === id);

const getCategoryesById = async (id: string | undefined) => {
  Categoryes.find((category) => category.menuId === id);
};

const createCategory = async ({ id, menuId, title, photo, isVisible }: TCategory) => {
  const category = new Category({
    id,
    menuId,
    title,
    photo,
    isVisible,
  });
  Categoryes.push(category);
  return category;
};
// const createCategory = async (
//   id: String,
//   menuId: String,
//   title: String,
//   photo: String,
//   isVisible: Boolean,
// ) => {
//   const category = new Category(id, menuId, title, photo, isVisible);
//   Categoryes.push(category);
//   return category;
// };

const deleteById = async (id: String) => {
  const categoryPosition: number = Categoryes.findIndex((category) => category.id === id);

  if (categoryPosition === -1) return null;

  const categoryDeletable = Categoryes[categoryPosition];

  Categoryes.splice(categoryPosition, 1);
  return categoryDeletable;
};

const updateById = async ({ id, menuId, title, photo, isVisible }: TCategory) => {
  const categoryPosition = Categoryes.findIndex((category) => category.id === id);

  if (categoryPosition === -1) return null;

  const oldCategory = Categoryes[categoryPosition];
  const newCategory = { ...oldCategory, id, menuId, title, photo, isVisible };

  Categoryes.splice(categoryPosition, 1, newCategory);
  return newCategory;
};

export { Categoryes, getAll, getById, getCategoryesById, createCategory, deleteById, updateById };
