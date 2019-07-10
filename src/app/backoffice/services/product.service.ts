import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory, ProductCategoryParameter} from '../../../model/product-parameter';
import {CATEGORY, PARAMETER} from '../../api-constant';
import {Observable} from 'rxjs';
import {AppInputData} from '../../../model/app-input-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private appInputData: AppInputData) {}

  // Добавить новый параметр для категории
  addCategoryParameter(productCategoryParameter: ProductCategoryParameter): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(PARAMETER, productCategoryParameter);
  }

  // Удалить параметр у категории
  deleteCategoryParameter(productCategoryParameter: ProductCategoryParameter): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(PARAMETER, productCategoryParameter);
  }

  // Добавить новую категорию
  addCategory(category: ProductCategory): Observable<Array<ProductCategory>> {
    category.groupId = this.appInputData.groupId;
    return this.http.post<Array<ProductCategory>>(CATEGORY, category);
  }

  // Удалить категорию
  deleteCategory(category: ProductCategory): Observable<Array<ProductCategory>> {
    return this.http.post<Array<ProductCategory>>(CATEGORY, category);
  }

}
