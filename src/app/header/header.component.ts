import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = false;
  toggleNav = false;

  constructor() {}

  ngOnInit(): void {}

  getToggleClass() {
    return this.toggleMenu
      ? 'header-menu-toggle is-active'
      : 'header-menu-toggle';
  }

  getNavClass() {
    if (this.toggleNav) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
    return this.toggleNav ? 'header-nav header-mobile-nav' : 'header-nav';
  }
}
