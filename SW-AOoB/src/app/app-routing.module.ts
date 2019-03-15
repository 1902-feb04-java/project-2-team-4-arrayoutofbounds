import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
//   {path:'home', component: HomeComponent},
//   {path:'catalogue', component: CatalogueComponent},
//   {path:'inventory', component: InventoryComponent},
//   {path:'history', component: HistoryComponent},
//   {path:'locations', component: LocationsComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
