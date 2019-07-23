import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material';
import {Category, CategoryItem} from '../../../../model/product-parameter';
import {ProductService} from '../../services/product.service';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  newCategory = new Category();
  selectedCategory: Category;
  productCategories: Category[];
  readonly selectable = true;
  readonly removable = true;
  readonly addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private productService: ProductService, private appService: AppService) {
  }

  ngOnInit() {
    this.productService.getCategories('1')
      .subscribe(value => {
        this.productCategories = value;
      });
  }

  onProductCategoryAdd(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const productCategoryParameter = new CategoryItem(value.trim());
      if (this.selectedCategory.categoryItems === undefined) {
        this.selectedCategory.categoryItems = [];
      }
      this.selectedCategory.categoryItems.push(productCategoryParameter);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.saveAndUpdateCategories();
  }

  saveAndUpdateCategories() {
    this.productService.addCategory(this.selectedCategory).subscribe(() => {
      this.productService.getCategories('1')
        .subscribe(value => {
          this.productCategories = value;
        });
    });
  }

  // TODO: Получить ID группы
  onCategoryAdd() {
    if (!this.productCategories.some(pc => pc.name === this.newCategory.name)) {
      this.newCategory.groupId = 1;
      this.productService.addCategory(this.newCategory).subscribe(() => {
        this.productService.getCategories('1')
          .subscribe(value => {
            this.productCategories = value;
          });
      });
      this.newCategory = new Category();
      this.selectedCategory = null;
    }
  }
}
