import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {OfficersComponent} from './officers/officers.component';
import{LoginComponent} from './login/login.component'
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomepageComponent},
  {path:'officers', component: OfficersComponent},
  {path:'items', component: ItemComponent},
  {path:'order', component: OrderComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'catalogue', component: CatalogueComponent},
  // {path:'inventory', component: InventoryComponent},
  {path:'orders', component: OrdersComponent},
  // {path:'locations', component: LocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
