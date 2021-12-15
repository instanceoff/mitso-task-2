export class Menu {
  id: string;

  title: string;

  photo: string;

  isPublish: boolean;

  constructor({ id = 'id', title = 'title', photo = 'photo', isPublish = true } = {}) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }

  static toResponse(menu: Menu) {
    const { id, title, photo, isPublish } = menu;
    return { id, title, photo, isPublish };
  }
}
