export interface TCategory {
  id: string;
  menuId: string;
  title: string;
  photo: string;
  isVisible: Boolean;
}

export interface TCategoryModel extends TCategory {
  id: string;
}

export interface TCategoryPartial extends Partial<TCategory> {}
