import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../model/product';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
})
export class CatalogItemComponent implements OnInit {
  @Input()
  item: Item;
  @Output()
  addToBucketEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getImage() {
    const url = `url(${this.item.thumb_photo})`;
    return {'background-image': url};
  }

  addToBucket() {
    this.addToBucketEvent.emit();
  }
}
