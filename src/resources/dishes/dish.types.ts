export interface TDish {
  id: String;
  categoryId: String;
  title: String;
  description: String;
  photo: String;
  isPublish: Boolean;
  ingredients: String[];
  price: Number;
}

export interface TDishModel extends TDish {
  id: string;
}

export interface TDishPartial extends Partial<TDish> {}
