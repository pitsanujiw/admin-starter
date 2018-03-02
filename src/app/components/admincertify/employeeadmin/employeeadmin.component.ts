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
  result: any [];
  // employeeID: number;
  //  firstName: string;
  //  lastName: string;
  //  numberOfCopy: number;
  //  note: string;
  //  status: number;
  //  BBL: number;
  //  GHB: number;
  //  LHBank: number;
  //  UOB: number;
  //  countryOfVisit: string;
  //  embassyForVisaApplication: string;
  //  filesOwner: any;
  //  firstNamePassport: string;
  //  lastNamePassport: string;
  //  passportExpiryDate: string;
  //  passportNumber: string;
  //  from: string;
  //  to: string;
  //  thomsonReutersOfficeYouPlanToVisit: string;
  //  companyRegisteredName: string;
  //  country: string;
  //  purposeOfVisit: string;

  constructor(private certifyService: CertifyLetterService) { }
  // get data request
  ngOnInit() {
    this.certifyService
      .showAllCertifyLetter()
      .subscribe(
        res => {
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
      if (e.selected === true) {
        console.log(e);
        console.log(e.ticketID);
      }
    });
    console.log('............................');
  }
  //
  // e.selected = event.target.checked, console.log(event.target.checked)
  // Checkbox select and return log select
  checkIfAllSelected() {
    this.selected = this.UserRequest.every((e) =>
    e.selected === true),
    this.UserRequest.forEach( e => {
      if ( e.selected === true ) {
        console.log(e);
        console.log(e.ticketID);
        this.result = e.ticketID;
       console.log(this.result);
      }
    }
  );
  console.log('............................');
  }

  //
  //
  //
  submit() {
    console.log(this.result);
    this.UserRequest.forEach(e => {
      if (this.result === e.ticketID) {
        if (e.typeCertifyLetter === 'employmentCertifyLetter') {
          console.log('success 1');
        } else if (e.typeCertifyLetter === 'certifyLetterForHousingLoan') {
          console.log('success 2');
        } else if (e.typeCertifyLetter === 'certifyLetterForFurtherEducation') {
          console.log('success 3');
        } else if (e.typeCertifyLetter === 'certifyLetterForTouristVisaApplication') {
          console.log('success 4');
        } else if (e.typeCertifyLetter === 'certifyLetterForBusinessVisaApplication') {
          console.log('success 5');
        } else {
        console.error('error');
               }
      }
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
      });
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


