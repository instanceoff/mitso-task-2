const uuid = require('uuid');

class Menu {
  constructor({ id = uuid(), categoryId = 'PLACEHOLDER', title = 'No photo', description = "buba", photo = "sagsa", isPublish = true, ingredients = {"buba", "boba"}, price = 10 } = {}) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.photo = photo;
    this.isPublish = isPublish;
    this.ingredients = ingredients;
    this.price = price;
  }

  static toResponse(menu) {
    const { id, title, photo, isPublish } = menu;
    return { id, title, photo, isPublish };
  }
}

module.exports = Menu;
