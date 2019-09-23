import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children;
}
export const ROUTES: RouteInfo[] = [
  { path: '/categories', title: 'دسته بندی مقالات', icon: ' person ', class: '', children: {} },
  { path: '/articles', title: ' مقالات', icon: ' person ', class: '', children: {} },
  { path: '/countries', title: ' کشورها', icon: ' person ', class: '', children: {} },
  { path: '/cities', title: ' شهرها', icon: ' person ', class: '', children: {} },
  { path: '/hotels', title: ' هتل ها', icon: ' person ', class: '', children: {} },
  { path: '/tours', title: ' تورها', icon: ' person ', class: '', children: {} },
  
  



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  showSubMenu: boolean = false;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
