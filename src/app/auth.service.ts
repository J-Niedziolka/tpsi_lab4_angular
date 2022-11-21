import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //isLoggedIn: boolean = false;
  isLoggedIn$ = new BehaviorSubject(false);

  login(username: string, password: string) {
    if(username == "jacek" && password == "1234") {
      this.isLoggedIn$.next(true);
      return true;
    }
    else {
      this.isLoggedIn$.next(false);
      return false;
    }
  }

  logout(){
    this.isLoggedIn$.next(false);
  }
}
