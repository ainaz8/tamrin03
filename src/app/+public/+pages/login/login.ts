import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  router = inject(Router);

  loginform: LoginForm = {
    username: '',
    password: '',
    keepme: false
  };

  message: string = '';

  check() {
    if ( this.loginform.username === 'ainaz' && this.loginform.password === '1384'){
      sessionStorage.setItem('token','jhgbyhugvgvhgvhg');
      if(this.loginform.keepme==true){
        localStorage.setItem('token','jhgbyhugvgvhgvhg');
      }
        this.router.navigateByUrl('/private');
    } 
    else {
      this.message = 'نام کاربری یا کلمه عبور صحیح نیست';
    }
  }
}

export interface LoginForm {
  username: string;
  password: string;
  keepme: boolean;
}
