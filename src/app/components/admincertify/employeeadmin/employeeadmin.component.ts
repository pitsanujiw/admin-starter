import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CertifyLetterService } from '../../../services/certify-letter.service';

@Component({
  selector: 'app-employeeadmin',
  templateUrl: './employeeadmin.component.html',
  styleUrls: ['./employeeadmin.component.css']
})
export class EmployeeadminComponent implements OnInit {

  UserRequest: any[];
  selected: any;
  typeCertifyLetter: string;
  modifiedAt: string;
  result: any[]=[];
  TricketID: string;
  employeeID: number;
  firstName: string;
  lastName: string;
  numberOfCopy: number;
  note: string;
  status: number;
  BBL: number;
  GHB: number;
  LHBank: number;
  UOB: number;
  countryOfVisit: string;
  embassyForVisaApplication: string;
  filesOwner: any;
  firstNamePassport: string;
  lastNamePassport: string;
  passportExpiryDate: string;
  passportNumber: string;
  from: string;
  to: string;
  thomsonReutersOfficeYouPlanToVisit: string;
  companyRegisteredName: string;
  country: string;
  purposeOfVisit: string;

  constructor(private certifyService: CertifyLetterService) { }
  // get data request
  ngOnInit() {
    this.certifyService
      .showAllCertifyLetter()
      .subscribe(
        res => {
          console.log(res);
          
          if (res.status === true) {
            this.UserRequest = res.message;
            console.log(this.UserRequest);
            console.log('OK GET DATA SUCCESS');
          } else {
            alert('error data respones');
          }
        }
      );
  }
  //
  //
  // checkbox selectAll
  selectAll(event) {
    this.UserRequest.forEach(e => {
      e.selected = event.target.checked;
      if(e.selected === true) {
        console.log(e);
         this.result = e;
      }
    }
    );
    console.log(this.UserRequest);
    console.log(this.result);
    
  }
  //
  //
 // check if Select???
  checkIfAllSelected(event) {
    
    this.selected = this.UserRequest.every((e) =>
      e.selected === true),
      this.UserRequest.forEach(e => {
        this.result = e
        if (e.selected === true) {
          console.log(this.result);
console.log('OK');

        }
      }
      );
      console.log('...........');
      
  }
  //
  //
  //
  submit() {
    
    // this.UserRequest.forEach(e => {
    //   if (this.result === e.ticketID) {
    //     if (e.typeCertifyLetter === 'employmentCertifyLetter') {
    //       console.log('success 1');
    //       console.log(e);
    //       const employeeID = e.owner.employeeID;
    //       const TricketID = e.ticketID;
    //       const status = 0;
    //       const modifiedAt = e.modifiledAt;
    //       const firstName = e.owner.firstName;
    //       const lastName = e.owner.lastName;
    //       const numberOfCopy = e.owner.numberOfCopy;
    //       const note = e.owner.note;

    //       this.certifyService.updateEmploymentCertifyLetter(
    //         TricketID,
    //         modifiedAt,
    //         status,
    //         employeeID,
    //         firstName,
    //         lastName,
    //         numberOfCopy
    //         , note)
    //         .subscribe(res => {
    //           console.log(res);
    //           console.log('success');
    //         })
    //     } else if (e.typeCertifyLetter === 'certifyLetterForHousingLoan') {
    //       console.log('success 2');
    //     } else if (e.typeCertifyLetter === 'certifyLetterForFurtherEducation') {
    //       console.log('success 3');
    //     } else if (e.typeCertifyLetter === 'certifyLetterForTouristVisaApplication') {
    //       console.log('success 4');
    //     } else if (e.typeCertifyLetter === 'certifyLetterForBusinessVisaApplication') {
    //       console.log('success 5');
    //     } else {
    //       console.error('error');
    //     }
    //   }
       // if (e.typeCertifyLetter === 'employmentCertifyLetter') {
      //   if (this.result === e.ticketID ) {
      //     console.log('Success');
      //   }
      // }
      // if (e.typeCertifyLetter === 'certifyLetterForHousingLoan') {
      // //   console.log(e.typeCertifyLetter);
      // //   console.log(e.status);
      // //   console.log(e.owner.employeeID);
      // // console.log(e.owner.note);
      // if (this.result === e.ticketID ) {
      //   console.log('Success');
      // }
      // }
      // if (e.typeCertifyLetter === 'certifyLetterForFurtherEducation') {
      // //   console.log(e.typeCertifyLetter);
      // //   console.log(e.status);
      // //   console.log(e.owner.employeeID);
      // // console.log(e.owner.note);
      // if (this.result === e.ticketID ) {
      //   console.log('Success2');
      // }
      // }
      // if (e.typeCertifyLetter === 'certifyLetterForTouristVisaApplication') {
      // //   console.log(e.typeCertifyLetter);
      // //   console.log(e.status);
      // //   console.log(e.owner.employeeID);
      // // console.log(e.owner.note);
      // if (this.result === e.ticketID ) {
      //   console.log('Success3');
      // }
      // }
      // if (e.typeCertifyLetter === 'certifyLetterForBusinessVisaApplication') {
      // //   console.log(e.typeCertifyLetter);
      // //   console.log(e.status);
      // //   console.log(e.owner.employeeID);
      // // console.log(e.owner.note);
      // if (this.result === e.ticketID ) {
      //   console.log('Success4');
      // }
      // }
    // });
  }

  CreateLetter() {
    console.log('Create Letter');
  }
  OpenExcel() {
    console.log('Open excel');
  }
  sendNotification() {
    console.log('Send Notification');
  }
}


