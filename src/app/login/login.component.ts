import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = "";
  username: string = "";
  password: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  isLoggedIn = this.auth.isLoggedIn$;

  login(){
    if(this.auth.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    }
    else {
      this.error = "Zły login lub hasło!";
    }
  }
}
