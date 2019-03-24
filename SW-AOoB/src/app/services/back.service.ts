import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(
    public router:Router
  ) { }
  homepageBack(): void{
    this.router.navigate(['/homepage']);
  }
}

// <a><button id='back' class='button' (click)= back()>Back</button></a>
// import { BackService } from '../services/back.service';
// private backService:BackService
// back():void{
//  this.backService.homepageBack();
// }