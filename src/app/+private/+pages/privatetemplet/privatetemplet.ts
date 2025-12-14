import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-privatetemplet',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './privatetemplet.html',
  styleUrl: './privatetemplet.scss',
})
export class Privatetemplet {
  router=inject(Router);
  logoff() {
    sessionStorage.clear();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
