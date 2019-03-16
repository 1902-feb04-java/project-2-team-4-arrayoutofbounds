import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {OfficersComponent} from './officers/officers.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomepageComponent},
  {path:'officers', component: OfficersComponent}
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
