import { Component, OnInit } from '@angular/core';
import { NavbarTab } from 'src/app/models/utils/navbar-tab.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarTabs: NavbarTab[] = [
    new NavbarTab(['page1'], 'tab 1'),
    new NavbarTab(['page2'], 'tab 2'),
    new NavbarTab(['page3'], 'tab 3'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
