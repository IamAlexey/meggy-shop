export class ProductCategory {
  id: number;
  groupId: number;
  name: string;
  categoryParameters: Array<ProductCategoryParameter> = [];
}

export class ProductCategoryParameter {

  constructor(categoryId: number, name: string) {
    this.productCategoryId = categoryId;
    this.name = name;
  }

  id: number;
  productCategoryId: number;
  name: string;
}

