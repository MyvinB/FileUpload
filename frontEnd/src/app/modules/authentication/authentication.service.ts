import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export const TOKEN_NAME:string = "jwt_token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authServiceEndpoint:string = "http://localhost:8080/api";
  token:string;
  constructor(private http: HttpClient) { }

  registerUser(newUser) {
    const url = `${this.authServiceEndpoint}/register`;
    return this.http.post(url, newUser, {responseType: 'text'});
  }


  loginUser(user) {
    const url = `${this.authServiceEndpoint}/login`;
    return this.http.post(url, user);
  }

  setToken(token:string) {
    return localStorage.setItem(TOKEN_NAME, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  deleteToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }


}
