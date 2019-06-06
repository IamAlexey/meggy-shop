import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PRODUCT_BY_ID} from '../../api-constant';
import {Observable} from 'rxjs';
import {ProductDto} from '../model/product-dto';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {}

  // Получить продукт и его параметры по id
  findProductById(id: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(
      `${PRODUCT_BY_ID}${id}`,
    );
  }

}
