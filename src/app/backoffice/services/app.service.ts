import { Injectable } from '@angular/core';
import {AppInputData} from '../../../model/app-input-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private appData: AppInputData;

  constructor() { }

  setAppData(appData: AppInputData) {
    this.appData = appData;
  }

  getAppData() {
    return this.appData;
  }
}
