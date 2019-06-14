export class ProductEditModel {
  id: number;
  name: string;
  defaultPrice: number;
  parameters: Array<ProductParameter>;

}

class ProductParameter {
  type: AttributeType;
  records: Array<Record<string, number>>;
}

enum AttributeType {
  SIZE = 'Размер',
  COLOR = 'Цвет',
  WEIGHT = 'Вес',
  PACKAGE = 'Упаковка'
}
