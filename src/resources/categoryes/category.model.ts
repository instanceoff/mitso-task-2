export class Category {
  id: String;
  menuId: String;
  title: String;
  photo: String;
  isVisible: Boolean;

  constructor(
    id: String = 'id',
    menuId: String = 'menuId',
    title: String = 'title',
    photo: String = 'photo',
    isVisible: Boolean = true,
  ) {
    this.id = id;
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }

  static toResponse(category) {
    const { id, menuId, title, photo, isVisible } = category;
    return { id, menuId, title, photo, isVisible };
  }
}

// module.exports = Category;
