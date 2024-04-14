import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
 
  repeatPass: string = 'none';
  selectedType: string = ''; // Property to hold the selected connection type
 
  signUpForm = new FormGroup({
    customerName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    houseNumber: new FormControl("", [Validators.required, Validators.minLength(2)]),
    address: new FormControl("", [Validators.required, Validators.minLength(4)]),
    contact: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    connectionType: new FormControl("", [Validators.required]), // Added connectionType control
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPassword: new FormControl("")
  });
 
  constructor(private authService: AuthService, private router: Router) { }
 
  ngOnInit(): void { }
 
  signUpSubmitted() {
    if (this.signUpForm.valid) {
      if (this.Password.value === this.ConfirmPassword.value) {
        this.repeatPass = 'none';
        this.authService.registerUser(this.signUpForm.value).subscribe(
          res => {
            console.log(res);
            this.signUpForm.reset();
            alert('Sign Up Successful');
            this.router.navigate(['/home']);
          },
          error => {
            console.error(error);
            console.log("Signup failed:", error);
          }
        );
      } else {
        this.repeatPass = 'inline';
      }
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
 
  // Method to handle dropdown change
  onTypeChange() {
    console.log('Selected connection type:', this.selectedType);
    // You can perform any actions based on the selected type here
  }
 
  // Getter methods for form controls
  get CustomerName(): FormControl {
    return this.signUpForm.get("customerName") as FormControl;
  }
 
  get Email(): FormControl {
    return this.signUpForm.get("email") as FormControl;
  }
 
  get HouseNumber(): FormControl {
    return this.signUpForm.get("houseNumber") as FormControl;
  }
 
  get Address(): FormControl {
    return this.signUpForm.get("address") as FormControl;
  }
 
  get Contact(): FormControl {
    return this.signUpForm.get("contact") as FormControl;
  }
 
  get ConnectionType(): FormControl {
    return this.signUpForm.get("connectionType") as FormControl;
  }
 
  get Password(): FormControl {
    return this.signUpForm.get("password") as FormControl;
  }
 
  get ConfirmPassword(): FormControl {
    return this.signUpForm.get("confirmPassword") as FormControl;
  }
}
 
 