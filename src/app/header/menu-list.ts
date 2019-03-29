export const menuList: Array<MenuList> = [
  {
    name: 'Товары',
    link: '/main',
    cssClass: 'bonusprog',
  },
  {
    name: 'Мои заказы',
    link: '/messages',
    cssClass: 'messages',
    disabled: true,
  },
  {
    name: 'Корзина',
    link: '/profile',
    cssClass: 'profile',
    disabled: true,
  },
];

export class MenuList {
  name: string;
  link?: string;
  cssClass?: string;
  count?: number;
  disabled?: boolean;
}
