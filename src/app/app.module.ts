import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { CONTACTComponent } from './contact/contact.component';
import { AboutUdComponent } from './about-ud/about-ud.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CustomerDashbaordComponent } from './customer-dashbaord/customer-dashbaord.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminSiginComponent } from './admin-sigin/admin-sigin.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CustomerPayHistoryComponent } from './customer-pay-history/customer-pay-history.component';
import { CustomerBillHistoryComponent } from './customer-bill-history/customer-bill-history.component';
import { CustomerPayBillComponent } from './customer-pay-bill/customer-pay-bill.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ABOUTUSComponent,
    CONTACTComponent,
    AboutUdComponent,
    SignUpComponent,
    LoginComponent,
    CustomerDashbaordComponent,
    ProfileComponent,
    EditProfileComponent,
    AdminSiginComponent,
    CustomerChangePasswordComponent,
    AdminUserComponent,
    CustomerPayHistoryComponent,
    CustomerBillHistoryComponent,
    CustomerPayBillComponent,
    ForgetPasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
