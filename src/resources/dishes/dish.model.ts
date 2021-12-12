export class Dish {
  id: String;

  categoryId: String;

  title: String;

  description: String;

  photo: String;

  isPublish: Boolean;

  ingredients: String[];

  price: Number;

  constructor(
    id: String = 'id',
    categoryId: String = 'PLACEHOLDER',
    title: String = 'title',
    description: String = 'description',
    photo: String = 'photo',
    isPublish: Boolean = true,
    ingredients: String[] = ['buba', 'boba'],
    price: Number = 10,
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.photo = photo;
    this.isPublish = isPublish;
    this.ingredients = ingredients;
    this.price = price;
  }

  static toResponse(dish: Dish) {
    const { id, categoryId, description, title, photo, isPublish, ingredients, price } = dish;
    return { id, categoryId, description, title, photo, isPublish, ingredients, price };
  }
}

// module.exports = Dish;
