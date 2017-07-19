import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { PessoasService } from './services/pessoas.service';
import { MenuService } from "app/providers/menu.service";
import { CartService } from "app/providers/cart.service";
import { ProductsService } from "app/providers/products.service";
import { StorageService } from "app/providers/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    SearchbarComponent,
    CartbarComponent,
    BannerComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductPageComponent,
    Error404PageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [PessoasService,
              MenuService,
              CartService,
              ProductsService,
              StorageService,
              MenuService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
