import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var VK;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Хрустики Мегги';

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    const self = this;
    VK.init(() => {
    }, () => {
    }, '5.92');

    VK.callMethod('resizeWindow', document.body.clientWidth, document.documentElement.clientHeight);
    // self.ref.detectChanges();
  }
}
