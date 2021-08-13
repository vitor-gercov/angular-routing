import { Component, Input, OnInit } from '@angular/core';
import { NavbarTab } from 'src/app/models/utils/navbar-tab.model';

@Component({
  selector: 'navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  @Input('navbarItemInfo')
  navbarTab: NavbarTab = new NavbarTab()

  constructor() { }

  ngOnInit(): void {
  }

}
