import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    public router: Router
  ) { }
  logout(): void{
    localStorage.removeItem('officer')
    this.router.navigate(['/login']);
  }
}

// <a><button id='logout' class='button' (click)= logout()>Logout</button></a>
// logout():void {
//     this.logoutService.logout();
// }
// private logoutService:LogoutService
// import { LogoutService} from '../services/logout.service';
// console.log(localStorage.getItem('officer'))