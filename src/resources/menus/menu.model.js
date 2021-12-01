class Menu {
  constructor({ id, title, photo, isPublish } = {}) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }

  static toResponse(menu) {
    const { id, title, photo, isPublish } = menu;
    return { id, title, photo, isPublish };
  }
}

module.exports = Menu;
