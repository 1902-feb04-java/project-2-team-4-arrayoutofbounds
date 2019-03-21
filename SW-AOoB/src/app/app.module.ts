import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficersComponent } from './officers/officers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { OrderService } from './order.service';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { OrdersComponent } from './orders/orders.component';
import {MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    OfficersComponent,
    HomepageComponent,
    LoginComponent,
    ItemComponent,
    OrderComponent,
    CatalogueComponent,
    OrdersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
