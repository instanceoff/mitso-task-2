const uuid = require('uuid');

class Menu {
  constructor({ id = "id", title = 'title', photo = 'photo', isPublish = true } = {}) {
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
