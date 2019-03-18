import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CatalogueComponent } from './catalogue/catalogue.component';

import {MatTabsModule} from '@angular/material';

=======
import { OfficersComponent } from './officers/officers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CatalogueComponent
=======
    OfficersComponent,
    HomepageComponent,
    LoginComponent,
    ItemComponent
>>>>>>> dev
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatTabsModule
=======
    HttpClientModule
>>>>>>> dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
