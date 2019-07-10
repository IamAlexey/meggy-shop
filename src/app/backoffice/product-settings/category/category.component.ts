import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ProductCategory, ProductCategoryParameter} from '../../../../model/product-parameter';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  myControl = new FormControl();
  selectedProductCategory = new ProductCategory();
  newCategory = new ProductCategory();
  productCategories: ProductCategory[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
  }

  onProductCategoryAdd(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const productCategoryParameter = new ProductCategoryParameter(this.selectedProductCategory.id, value.trim());

      this.productService.addCategoryParameter(productCategoryParameter).subscribe(category => {
        this.selectedProductCategory = category;
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    console.log(JSON.stringify(this.selectedProductCategory));
  }

  onDeleteCategoryParameter(productCategoryParameter: ProductCategoryParameter): void {
    this.productService.deleteCategoryParameter(productCategoryParameter).subscribe(pc => {
      this.selectedProductCategory = pc;
    });
  }

  onCategoryAdd() {
    if (!this.productCategories.some(pc => pc.name === this.newCategory.name)) {
      this.productService.addCategory(this.newCategory).subscribe(pc => {
        this.productCategories = pc;
      });
      this.newCategory = new ProductCategory();
    }
  }
}
