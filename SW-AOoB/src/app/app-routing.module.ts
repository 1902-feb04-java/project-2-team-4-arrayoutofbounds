import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {OfficersComponent} from './officers/officers.component';
import{LoginComponent} from './login/login.component'
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomepageComponent},
  {path:'officers', component: OfficersComponent},
  {path:'items', component: ItemComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
  // {path:'catalogue', component: CatalogueComponent},
  // {path:'inventory', component: InventoryComponent},
  // {path:'history', component: HistoryComponent},
  // {path:'locations', component: LocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
