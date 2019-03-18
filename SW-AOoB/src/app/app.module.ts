import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficersComponent } from './officers/officers.component';
import { HomepageComponent } from './homepage/homepage.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoriesComponent } from './inventories/inventories.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    OfficersComponent,
    HomepageComponent,
    InventoriesComponent,
    LoginComponent,
    ItemComponent,
    CatalogueComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
