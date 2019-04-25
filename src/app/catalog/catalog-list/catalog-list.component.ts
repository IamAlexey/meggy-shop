import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Item, RootObject} from '../../../model/product';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CatalogDialogComponent} from '../catalog-dialog/catalog-dialog.component';
declare var VK;

export interface ItemType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) {

  }

  items: Item[];

  itemTypes: ItemType[] = [
    {value: 'all', viewValue: 'Все товары'},
    {value: 'yummie', viewValue: 'Лакомства'},
    {value: 'collar', viewValue: 'Ошейники'},
    {value: 'horns', viewValue: 'Рога'},
  ];

  ngOnInit(): void {
    const self = this;
    VK.api('market.get', {owner_id: -160678993}, (rootObject: RootObject) => {
      this.items = rootObject.response.items;
      self.ref.detectChanges();
    });
  }

}
