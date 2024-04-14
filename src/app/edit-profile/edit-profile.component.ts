// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-profile',
//   templateUrl: './edit-profile.component.html',
//   styleUrls: ['./edit-profile.component.css']
// })
// export class EditProfileComponent {

// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUserEmail: string = '';
  customer: any = {};
 
  constructor(private authService: AuthService, private router: Router) {}
 
  ngOnInit(): void {
    this.currentUserEmail = this.authService.getCurrentUserEmail();
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
 
  updateCustomer() {
    this.authService.updateCustomer(this.customer).subscribe(
      (response) => {
        console.log('Customer updated successfully:', response);
        alert('Profile updated successfully.');
        // Optionally, navigate to another page after successful update
        // this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error updating customer:', error);
        alert('Failed to update profile. Please try again.');
      }
    );
  }
 
  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}