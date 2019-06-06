import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Item} from '../../../model/product';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CatalogDialogComponent} from '../catalog-dialog/catalog-dialog.component';
import {CatalogPurchaseDialogComponent} from '../catalog-purchase-dialog/catalog-purchase-dialog.component';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  item: Item;

  constructor(private dialog: MatDialog, private zone: NgZone) {
  }

  ngOnInit() {
  }

  getImage() {
    const url = `url(${this.item.thumb_photo})`;
    return {'background-image': url};
  }

  openDialog() {
    this.zone.run(() => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.width = '80vh';
      dialogConfig.autoFocus = false;

      dialogConfig.data = {
        description: this.item.description,
        price: this.item.price,
        thumb_photo: this.item.thumb_photo,
        title: this.item.title
      };

      this.dialog.open(CatalogDialogComponent, dialogConfig);
    });
  }

  purchase() {
    this.zone.run(() => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.width = '80vh';
      dialogConfig.autoFocus = false;

      dialogConfig.data = {
        productId: this.item.id,
        title: this.item.title
      };

      this.dialog.open(CatalogPurchaseDialogComponent, dialogConfig);
    });
  }
}
