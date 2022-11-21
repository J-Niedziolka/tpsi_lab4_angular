import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(username: string, password: string): boolean {
    if(username == "jacek" && password == "1234") {
      this.isLoggedIn = true;
      return true;
    }
    else {
      this.isLoggedIn = false;
      return false;
    }
  }
}
