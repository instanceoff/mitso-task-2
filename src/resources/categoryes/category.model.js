class Category {
  constructor({
    id = 'id',
    menuId = 'menuId',
    title = 'title',
    photo = 'photo',
    isVisible = true,
  } = {}) {
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

module.exports = Category;
