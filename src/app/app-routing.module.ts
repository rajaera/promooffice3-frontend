import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SiteEntryComponentComponent } from './site-entry-component/site-entry-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { QuotationFormComponentComponent } from './quotation-form-component/quotation-form-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {
    path : 'home', 
    component : HomeComponentComponent,
    canActivate : [AuthGuard],
    children :[
      {path : '', component : SiteEntryComponentComponent},  
      {path : '**', redirectTo : 'home', pathMatch : 'full'}
    ]
  },
  {
    path : 'order', 
    component : OrderComponentComponent,
    canActivate : [AuthGuard],
    children : [          
      {path : 'quote-form',component : QuotationFormComponentComponent}
    ]
  },
  {
    path : 'login', 
    component : LoginComponent    
  },
  {path : '**', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
