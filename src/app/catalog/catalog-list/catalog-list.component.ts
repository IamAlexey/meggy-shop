import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Item, RootObject} from '../../../model/product';
declare var VK;

export interface ItemType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) {

  }

  items: Item[];

  itemTypes: ItemType[] = [
    {value: 'steak-0', viewValue: 'Все'},
    {value: 'pizza-1', viewValue: 'Лакомства'},
    {value: 'tacos-2', viewValue: 'Ошейники'},
    {value: 'tacos-3', viewValue: 'Рога'},
  ];

  ngOnInit(): void {
    const self = this;
    VK.api('market.get', {owner_id: -160678993}, (rootObject: RootObject) => {
      this.items = rootObject.response.items;
      self.ref.detectChanges();
    });
  }

}
