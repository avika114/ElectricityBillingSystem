// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
 
//   constructor(private http: HttpClient) { }
 
//   baseServerUrl = "http://localhost:5124/api/";
 
//   registerUser(signUpData: any): Observable<any> {
//     return this.http.post<any>(this.baseServerUrl + "Customer/signup", signUpData)
//       .pipe(
//         catchError(error => {
//           console.error(error); // Log any errors
//           return throwError(() => error); // Throw the error using a factory function
//         })
//       );
//   }
// }
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "http://localhost:5124/api/";

  
private currentUserEmail: string = '';
 
setCurrentUserEmail(email: string): void {
    this.currentUserEmail = email;
  }
 
  getCurrentUserEmail(): string {
    return this.currentUserEmail;
  }
 
  getCustomerByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.baseServerUrl + `Customer/GetCustomerByEmail/${email}`);
  }

  sendPasswordResetLink(email: string): Observable<any> {
    return this.http.post<any>(this.baseServerUrl + `Customer/SendPasswordResetLink`, { email });
  }
  updatePassword(email: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.baseServerUrl}Customer/update-password/${email}/${newPassword}`, {});
  }
  
  updateCustomer(customerData: any): Observable<any> {
    return this.http.put<any>(this.baseServerUrl + `Customer/UpdateCustomer/${customerData.customerId}`, customerData)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(() => error);
        })
      );
  }

  registerUser(signUpData: any): Observable<any> {
    return this.http.post<any>(this.baseServerUrl + "Customer/signup", signUpData)
      .pipe(
        catchError(error => {
          console.error(error); // Log any errors
          return throwError(() => error); // Throw the error using a factory function
        })
      );
  }

  // Add the loginUser method
  loginUser(signInData: Array<string>) {
    return this.http.post(this.baseServerUrl + 'Customer/signin', {
      Username: signInData[0],
      Password: signInData[1],
    },
      {
        responseType: 'text',
      })
      .pipe(
        tap((res: any) => {
          // Store the logged-in user's email
          this.setCurrentUserEmail(signInData[0]);
        })
      );
  }


  logoutUser(): void {
    // Clear the current user's email
    this.currentUserEmail = '';
  }
}