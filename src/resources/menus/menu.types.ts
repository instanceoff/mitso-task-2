export interface TMenu {
  id: string;
  title: string;
  photo: string;
  isPublish: boolean;
}

export interface TMenuModel extends TMenu {
  id: string;
}

export interface TMenuPartial extends Partial<TMenu> {}
