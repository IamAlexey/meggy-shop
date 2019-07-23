export class Category {
  id: number;
  groupId: number;
  name: string;
  categoryItems: CategoryItem[] = [];
}

export class CategoryItem {

  constructor(name: string) {
    this.name = name;
  }

  id: number;
  name: string;
}

