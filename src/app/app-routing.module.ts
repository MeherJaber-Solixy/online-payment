import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreditCardPayementComponent} from "./credit-card-payement/credit-card-payement.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'credit-card-payement',
    component: CreditCardPayementComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
