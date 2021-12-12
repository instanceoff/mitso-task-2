import { TCategoryPartial } from './category.types';

//  TCategory, TCategoryModel

export class Category {
  id: string;

  menuId: string;

  title: string;

  photo: string;

  isVisible: Boolean;

  constructor({
    id = 'id',
    menuId = 'menuId',
    title = 'title',
    photo = 'photo',
    isVisible = true,
  }: TCategoryPartial = {}) {
    this.id = id;
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }

  static toResponse(category: Category) {
    // const { id, menuId, title, photo, isVisible } = category;
    // return { id, menuId, title, photo, isVisible };
    return { ...category };
  }
}

// module.exports = Category;
