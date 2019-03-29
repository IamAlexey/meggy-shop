import {Component} from '@angular/core';
import {menuList, MenuList} from './menu-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuList: MenuList[] = menuList;

  constructor() {
  }

}
