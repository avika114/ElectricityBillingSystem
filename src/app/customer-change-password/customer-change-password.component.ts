// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customer-change-password',
//   templateUrl: './customer-change-password.component.html',
//   styleUrls: ['./customer-change-password.component.css']
// })
// export class CustomerChangePasswordComponent {

// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.css']
})
export class CustomerChangePasswordComponent implements OnInit {
 
  currentUserEmail: string = '';
  customer: any;
  router: any;
 
 
  newPassword: string = '';
 
  constructor(
    private authService: AuthService
  ) { }
 
  ngOnInit(): void {
    // Retrieve the current user's email when the component initializes
    this.currentUserEmail = this.authService.getCurrentUserEmail();
    // Fetch customer details based on email
    this.loadCustomerDetails();
  }
 
  loadCustomerDetails() {
    this.authService.getCustomerByEmail(this.currentUserEmail).subscribe(
      (data: any) => {
        this.customer = data;
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }
 
  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
 
  updatePassword(): void {
    if (this.currentUserEmail && this.newPassword) {
      this.authService.updatePassword(this.currentUserEmail, this.newPassword)
        .subscribe(
          () => {
            alert('Password updated successfully.');
            // Optionally, show a success message or navigate to another page
          },
          (error) => {
            console.error('Error updating password:', error);
            // Optionally, show an error message
          }
        );
    } else {
      console.error('Email and new password are required.');
      // Optionally, show a validation error message
    }
  }
 
}