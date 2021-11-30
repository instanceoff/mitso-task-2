class Dish {
  constructor({
    id = 'id',
    categoryId = 'PLACEHOLDER',
    title = 'title',
    description = 'description',
    photo = 'photo',
    isPublish = true,
    ingredients = ['buba', 'boba'],
    price = 10,
  } = {}) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.photo = photo;
    this.isPublish = isPublish;
    this.ingredients = ingredients;
    this.price = price;
  }

  static toResponse(dish) {
    const { id, categoryId, description, title, photo, isPublish, ingredients, price } = dish;
    return { id, categoryId, description, title, photo, isPublish, ingredients, price };
  }
}

module.exports = Dish;
