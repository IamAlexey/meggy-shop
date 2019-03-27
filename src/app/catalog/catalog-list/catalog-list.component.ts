import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Item, RootObject} from '../../../model/product';
declare var VK;

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
})
export class CatalogListComponent implements OnInit {

  items: Item[];

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    const self = this;
    VK.api('market.get', {owner_id: -160678993}, (rootObject: RootObject) => {
      this.items = rootObject.response.items;
      self.ref.detectChanges();
    });
  }

}
