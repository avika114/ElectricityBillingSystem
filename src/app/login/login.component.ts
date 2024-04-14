import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginAuth: AuthService, private router: Router) { }
 
  ngOnInit(): void { }
 
  loginForm = new FormGroup({
    Username: new FormControl("", [Validators.required, Validators.email]),
    Password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });
 
  isUserValid: boolean = false;
 
  loginSubmitted() {
    const username = this.loginForm.get('Username')?.value as string;
    const password = this.loginForm.get('Password')?.value as string;
 
    this.loginAuth.loginUser([username, password]).subscribe(res => {
      if (res === 'Failure') {
        this.isUserValid = false;
        alert('Invalid UserName or Password. Please try again.');
      } else {
        this.isUserValid = true;
        alert('Successfully Logged In.');
        this.router.navigate(['/customer-dashbaord']);
      }
    }, error => {
      console.error('Login failed:', error);
      this.isUserValid = false;
      alert('Invalid UserName or Password. Please try again.');
    });
  }
 
  get Username(): FormControl {
    return this.loginForm.get('Username') as FormControl;
  }
 
  get Password(): FormControl {
    return this.loginForm.get('Password') as FormControl;
  }
}
 