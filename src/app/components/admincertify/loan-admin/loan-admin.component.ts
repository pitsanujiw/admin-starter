import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CertifyLetterService } from '../../../services/certify-letter.service';

@Component({
  selector: 'app-loan-admin',
  templateUrl: './loan-admin.component.html',
  styleUrls: ['./loan-admin.component.css']
})
export class LoanAdminComponent implements OnInit {

  UserRequest_loan: any[];
  selectedAll: any;
  typeCertifyLetter: string;
constructor(private certifyService: CertifyLetterService) { }
// get data request
ngOnInit() {
  this.certifyService
  .showAllLoan()
  .subscribe(
    res => {
      if (res.status === true) {
        this.UserRequest_loan = res.message;
        console.log(this.UserRequest_loan);
        console.log('OK GET DATA SUCCESS');
      } else {
        alert('error data respones');
      }
      }
  );
}
//
// checkbox selectAll
selectAll(event) {
  this.UserRequest_loan.forEach(e => e.selected = event.target.checked,
    console.log('SelectAll')
  );
}
//
// Checkbox select and return log select
checkIfAllSelected() {
  this.selectedAll = this.UserRequest_loan.every((e) =>
       e.selected === true
       , console.log('Select')
    );
}
//
//
//
submit() {
//   this.typeCertifyLetter = 'employeeLetter';
//   if ( this.typeCertifyLetter === 'employeeLetter') {
//     console.log('ok correct');
//   } else if ( this.typeCertifyLetter === 'FurtherLetter') {
//     console.log('FutherLetter');
//    } else if ( this.typeCertifyLetter === 'BusinessVisa') {
//     console.log('BusinessVisa');
//    } else if ( this.typeCertifyLetter === 'TourVisa') {
//     console.log('TourVisa');
//    } else {
//      console.error('ERROR DATA TYPE');
//    }
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
