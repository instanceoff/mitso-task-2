import { TMenu } from './menu.types';
import { Menu } from './menu.model';

const Menus = [new Menu()];

const getAll = async () => Menus;

const getById = async (id: string) => Menus.find((menu) => menu.id === id);

const createMenu = async ({ id, title, photo, isPublish }: TMenu) => {
  const menu = new Menu({ id, title, photo, isPublish });
  Menus.push(menu);
  return menu;
};

const deleteById = async (id: string) => {
  const menuPosition = Menus.findIndex((menu) => menu.id === id);

  if (menuPosition === -1) return null;

  const menuDeletable = Menus[menuPosition];

  Menus.splice(menuPosition, 1);
  return menuDeletable;
};

const updateById = async ({ id, title, photo, isPublish }: TMenu) => {
  const menuPosition = Menus.findIndex((menu) => menu.id === id);

  if (menuPosition === -1) return null;

  const oldMenu = Menus[menuPosition];
  const newMenu = { ...oldMenu, id, title, photo, isPublish };

  Menus.splice(menuPosition, 1, newMenu);
  return newMenu;
};

export { Menus, getAll, getById, createMenu, deleteById, updateById };
