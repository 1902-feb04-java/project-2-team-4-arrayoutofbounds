import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficersComponent } from './officers/officers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoriesComponent } from './inventories/inventories.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { OrderService } from './services/order.service';
import {MatTabsModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule } from '@angular/material';
import { HighInventoryComponent } from './high-inventory/high-inventory.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { OrderHistoryDetailComponent } from './order-history-detail/order-history-detail.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { OrderDisplayComponent } from './confirmation-page/order-display/order-display.component';
import { BackService } from './services/back.service';
import { LogoutService } from './services/logout.service';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent,
    OfficersComponent,
    HomepageComponent,
    InventoriesComponent,
    LoginComponent,
    ItemComponent,
    OrderComponent,
    CatalogueComponent,
    OrderHistoryComponent,
    HighInventoryComponent,
    ConfirmationPageComponent,
    OrderHistoryDetailComponent,
    LogoutButtonComponent,
    BackButtonComponent,
    OrderDisplayComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    AmplifyAngularModule
  ],
  providers: [
    OrderService,
    BackService,
    LogoutService,
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
