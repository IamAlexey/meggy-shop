
export class ProductEditModel {
  id: number;
  name: string;
  defaultPrice: number;

}

enum AttributeType {
  SIZE = 'Размер',
  COLOR = 'Цвет',
  WEIGHT = 'Вес',
  PACKAGE = 'Упаковка'
}
