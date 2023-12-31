import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { Poster__page_one_partoneComponent } from './components/poster__page_one_partone/poster__page_one_partone.component';
import { Poster__page_one_parttowComponent } from './components/poster__page_one_parttow/poster__page_one_parttow.component';
import { Introduction__cityComponent } from './components/Introduction__city/Introduction__city.component';
import { Footer__page_oneComponent } from './components/footer__page_one/footer__page_one.component';
import { ComponentsComponent } from './components/components.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAwayComponent } from './components/navbar-away/navbar-away.component';
import { DetailComponent } from './page/detail/detail.component';
import { NavbarlastComponent } from './components/navbarlast/navbarlast.component';
import { MainlastComponent } from './components/mainlast/mainlast.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    Poster__page_one_partoneComponent,
    Poster__page_one_parttowComponent,
    Introduction__cityComponent,
    Footer__page_oneComponent,
    ComponentsComponent,
    MainComponent,
    PageComponent,
    NavbarComponent,
    NavbarAwayComponent,
    DetailComponent,
    NavbarlastComponent,
    MainlastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
