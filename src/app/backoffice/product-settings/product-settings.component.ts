import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductEditModel} from '../../../model/product-edit-model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-settings',
  templateUrl: './product-settings.component.html',
  styleUrls: ['./product-settings.component.css']
})
export class ProductSettingsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'defaultPrice', 'parameters'];
  dataSource: MatTableDataSource<ProductEditModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(null);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
