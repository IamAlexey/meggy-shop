import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {Item, RootObject} from '../model/product';

declare var VK;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Хрустики Мегги';

  ngOnInit(): void {
    VK.init(() => {
    }, () => {
    }, '5.92');
  }
}
