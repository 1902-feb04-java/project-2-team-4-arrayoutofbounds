import { Component, OnInit } from '@angular/core';
import { Officer } from '../models/Officer';
import {OfficerService} from '../services/officer.service';
import { LogoutService} from '../services/logout.service';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit 
{
  constructor(private officerService:OfficerService,private logoutService:LogoutService,private backService:BackService) { }
  officers: Officer[];
  // loc:Location = {id:1, name: "Valley of Bones", membershipGroup: 1}
  //currentOfficer: Officer = {id: 1, firstName: "Tim", rank: "Colonel"};
 
  // getOfficer(): void
  // {
  //   this.officerService.getOfficer(1)
  //   .subscribe(officer => {
  //     this.currentOfficer = officer;
  //     console.log(officer);
  //   })
  // }

  getOfficers(): void
  {
    this.officerService.getOfficers("Captain")
    .subscribe(officers => {
      this.officers = officers._embedded.officers;
      console.log(officers._embedded.officers);
    })
  }
  addOfficer(): void
  {
    let bob = {id:1, firstName:"BoB", rank:"Captain"};
    this.officerService.addOfficer(bob).subscribe(json => console.log(json));
  }

  ngOnInit() {
   //this.getOfficer();
   //this.addOfficer();
   this.getOfficers();
  }
  logout():void {
    this.logoutService.logout();
  }
  back():void{
    this.backService.homepageBack();
  }
}
