import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { CONTACTComponent } from './contact/contact.component';
//import { AboutUsComponent } from './aboutus/aboutus.component';
import { AboutUdComponent } from './about-ud/about-ud.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { AdminSiginComponent } from './admin-sigin/admin-sigin.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CustomerDashbaordComponent } from './customer-dashbaord/customer-dashbaord.component';

import { CustomerPayBillComponent } from './customer-pay-bill/customer-pay-bill.component';
import { CustomerBillHistoryComponent } from './customer-bill-history/customer-bill-history.component';
import { CustomerPayHistoryComponent } from './customer-pay-history/customer-pay-history.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'about', component: AboutUsComponent },
  { path: 'contact', component: CONTACTComponent },
  //{ path: 'aboutus', component: AboutUsComponent},
  { path: 'about-ud', component: AboutUdComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'customer-dashbaord', component: CustomerDashbaordComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-signin', component: AdminSiginComponent},
  {path: 'customer-change-password', component: CustomerChangePasswordComponent},
  {path: 'admin-user', component: AdminUserComponent},
  {path: 'customer-pay-history', component: CustomerPayHistoryComponent},
  {path: 'customer-bill-history', component: CustomerBillHistoryComponent},
  {path: 'customer-pay-bill', component: CustomerPayBillComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
