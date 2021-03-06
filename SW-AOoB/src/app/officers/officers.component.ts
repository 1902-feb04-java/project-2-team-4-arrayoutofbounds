import { Component, OnInit } from '@angular/core';
import { Officer } from '../models/Officer';
import {OfficerService} from '../services/officer.service';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit 
{
  constructor(private officerService:OfficerService) { }
  officers: Officer[];
  user:Officer;
  officer:Officer;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user);
    console.log(this.user.officerId);
    // this.getOfficers();
   }
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
  getOfficer(id:number):void{
    this.officerService.getOfficer(this.user.officerId)
    .subscribe(officer => {
      this.officer = officer;
    })
  }
  addOfficer(): void
  {
    let bob = {id:1, firstName:"BoB", rank:"Captain"};
    this.officerService.addOfficer(bob).subscribe(json => console.log(json));
  }
}
