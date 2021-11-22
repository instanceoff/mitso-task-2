const uuid = require('uuid');

class Category {
  constructor({ id = uuid(), menuId = 'PLACEHOLDER', title = 'No photo', photo = "sagsa", isPublish = true} = {}) {
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

module.exports = Category;
