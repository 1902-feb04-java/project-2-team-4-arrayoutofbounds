import { Component, OnInit } from '@angular/core';
import { Officer } from '../officer';
import {OfficerService} from '../officer.service';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit 
{
  constructor(private officerService:OfficerService) { }
  officers: Officer[];
  // loc:Location = {id:1, name: "Valley of Bones", membershipGroup: 1}
  currentOfficer: Officer;// = {id: 1, fisrtName: "Tim", lastName: "Timothy", rank: "Captain", superiorOfficer: 1};
 
  getOfficer(): void{
  this.officerService.getOfficer(1)
  .subscribe(officer => {
    // this.currentOfficer = officer;
    console.log(officer);
  });
  }

  ngOnInit() {
   this.getOfficer();
  }

}
