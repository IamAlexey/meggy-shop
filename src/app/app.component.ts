import {Component, OnInit} from '@angular/core';

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
