import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CatalogService} from '../services/catalog.service';
import {ProductDto} from '../model/product-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-catalog-purchase-dialog',
  templateUrl: './catalog-purchase-dialog.component.html',
  styleUrls: ['./catalog-purchase-dialog.component.css']
})
export class CatalogPurchaseDialogComponent implements OnInit {

  productId: number;
  title: string;
  productDto: Observable<ProductDto>;

  constructor(
    private dialogRef: MatDialogRef<CatalogPurchaseDialogComponent>,
    private catalogService: CatalogService,
    @Inject(MAT_DIALOG_DATA) {
      productId, title
    }) {
    this.title = title;
    this.productId = productId;
  }

  ngOnInit() {
    this.catalogService.findProductById(this.productId).subscribe(product => {
      console.log(product);
    });
  }

  close() {
    this.dialogRef.close();
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
}
