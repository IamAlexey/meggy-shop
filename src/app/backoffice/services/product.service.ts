import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../../../model/product-parameter';
import {CATEGORY} from '../../api-constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getCategories(groupId: string): Observable<Category[]> {
    const options = {params: new HttpParams().set('groupId', groupId)};
    return this.http.get<Category[]>(CATEGORY, options);
  }

  // Добавить новую категорию
  addCategory(category: Category): Observable<Category[]> {
    console.log(JSON.stringify(category) + 'sent');
    return this.http.post<Category[]>(CATEGORY, category);
  }

  // Удалить категорию
  deleteCategory(category: Category): Observable<Array<Category>> {
    return this.http.post<Category[]>(CATEGORY, category);
  }

}
