import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {OfficersComponent} from './officers/officers.component';
import{LoginComponent} from './login/login.component'
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { OrderHistoryDetailComponent } from './order-history-detail/order-history-detail.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomepageComponent},
  {path:'officers', component: OfficersComponent},
  {path:'items', component: ItemComponent},
  {path:'order', component: OrderComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'catalogue', component: CatalogueComponent},
  {path:'inventories', component: InventoriesComponent},
  {path:'orderhistory', component: OrderHistoryComponent},
  {path:'confirmation', component: ConfirmationPageComponent},
  {path: 'detail/:id', component: OrderHistoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
