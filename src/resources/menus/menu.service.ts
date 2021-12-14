// import menuRepo from './menu.memory.repository';
// import categoryRepo from '../categoryes/category.memory.repository';

import * as menuRepo from './menu.memory.repository';
import * as categoryRepo from '../categoryes/category.memory.repository';
import { TMenu } from './menu.types';

const getAll = () => menuRepo.getAll();
const getById = (id: string) => menuRepo.getById(id);
const createMenu = ({ id, title, photo, isPublish }: TMenu) =>
  menuRepo.createMenu({ id, title, photo, isPublish });
const deleteById = (id: string) => menuRepo.deleteById(id);
const updateById = ({ id, title, photo, isPublish }: TMenu) =>
  menuRepo.updateById({ id, title, photo, isPublish });
const getCategoryesById = (id: string) => categoryRepo.getCategoryesById(id);

export { getAll, getCategoryesById, getById, createMenu, deleteById, updateById };
