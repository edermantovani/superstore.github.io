import {Routes, RouterModule} from '@angular/router';
import { HomePageComponent } from "app/pages/home-page/home-page.component";
import { ProductsPageComponent } from "app/pages/products-page/products-page.component";
import { ProductPageComponent } from "app/pages/product-page/product-page.component";
import { Error404PageComponent } from "app/pages/error-404-page/error-404-page.component";
import { AboutPageComponent } from "app/pages/about-page/about-page.component";

const routes: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
    //products
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    //About
    {
        path: 'About',
        component: AboutPageComponent
    },    
    //handling 404
    {
        path: '**',
        component: Error404PageComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes);