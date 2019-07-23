import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from './backoffice/services/app.service';
import {AppInputData} from '../model/app-input-data';

declare var VK;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Хрустики Мегги';

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit(): void {
    VK.init(() => {
      this.initializeAppData();
      console.log('VK API initialized successful');
    }, () => {
      console.log('VK API initialization error');
    }, '5.92');

    VK.callMethod('resizeWindow', document.body.clientWidth, document.documentElement.clientHeight);
  }

  initializeAppData() {
    const params = this.activatedRoute.snapshot.queryParams;
    const appInputData = new AppInputData();
    appInputData.userId = params.viewer_id;
    appInputData.userType = params.viewer_type;
    appInputData.groupId = params.group_id;
    appInputData.accessToken = params.access_token;
    this.appService.setAppData(appInputData);
    console.log(JSON.stringify(appInputData));
  }
}
