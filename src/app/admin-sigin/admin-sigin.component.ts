import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-admin-sigin',
  templateUrl: './admin-sigin.component.html',
  styleUrls: ['./admin-sigin.component.css']
})
export class AdminSiginComponent {
  username: string = '';
  password: string = '';
 
  constructor(private router: Router) { }
 
  signIn() {
    // Check if username and password are correct
    if (this.username === 'Admin' && this.password === 'Admin@0000') {
      // If successful, navigate to admin dashboard
      this.router.navigate(['/admin-dashboard']);
    } else {
      // If not, display an error message or handle it as needed
      alert('Invalid username or password');
    }
  }
}