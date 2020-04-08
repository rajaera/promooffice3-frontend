import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SiteEntryComponentComponent } from './site-entry-component/site-entry-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { QuotationFormComponentComponent } from './quotation-form-component/quotation-form-component.component';
import { SiteHeaderComponent } from './site-header/site-header.component';


import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { OrderRowComponent } from './order-row/order-row.component';
import { SubItemRowComponent } from './sub-item-row/sub-item-row.component';
import { OrderHeaderComponent } from './order-header/order-header.component';

import { OrderObjectComponent } from './order-object/order-object.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SiteEntryComponentComponent,
    OrderComponentComponent,
    QuotationFormComponentComponent,
    SiteHeaderComponent,
    LoginComponent,
    OrderRowComponent,
    SubItemRowComponent,
    OrderHeaderComponent,
    OrderObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
