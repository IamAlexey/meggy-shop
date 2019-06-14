import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from "./backoffice/services/app.service";
import {AppInputData} from "../model/app-input-data";

declare var VK;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Хрустики Мегги';

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params.viewer_id;
      const type = params.viewer_type;
      appService.setAppData(new AppInputData(id, type));
    });
  }

  ngOnInit(): void {
    const self = this;
    VK.init(() => {
      console.log('ok here');
    }, () => {
      console.log('error here');
    }, '5.92');

    VK.callMethod('resizeWindow', document.body.clientWidth, document.documentElement.clientHeight);
  }
}
