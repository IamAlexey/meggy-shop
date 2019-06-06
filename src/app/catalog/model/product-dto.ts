import {ProductAttributeDto} from './product-attribute-dto';

export interface ProductDto {
  id: number;
  productCategory: string;
  productAttributes: [ProductAttributeDto];
}
