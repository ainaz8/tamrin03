import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginform:loginform={
username:'',
password:'',
keepme:false
};
message:string='';
}
export interface loginform{
  username:string;
  password:string;
  keepme:boolean;
}