import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';
import { Page3Component } from './components/pages/page3/page3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { NavbarItemComponent } from './components/partials/navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
