import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customer-dashbaord.component.html',
  styleUrls: ['./customer-dashbaord.component.css']
})
export class CustomerDashbaordComponent implements OnInit {
 
  currentUserEmail: string = '';
  customer: any;
  router: any;
 
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
}
 
 
 
 
 
 
 