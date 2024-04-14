// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forget-password',
//   templateUrl: './forget-password.component.html',
//   styleUrls: ['./forget-password.component.css']
// })
// export class ForgetPasswordComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendPasswordResetLink(): void {
    const apiUrl = `http://localhost:5124/api/Customer/forgot-password?email=${encodeURIComponent(this.email)}`;
    this.authService.sendPasswordResetLink(apiUrl).subscribe(
      (response) => {
        console.log('Password reset link sent successfully:', response);
        // Show success message or navigate to a success page
      },
      (error) => {
        console.error('Error sending password reset link:', error);
        // Show error message
      }
    );
  }
}
 