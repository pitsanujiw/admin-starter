import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoanService } from '../../../services/loan.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-loan-admin',
  templateUrl: './loan-admin.component.html',
  styleUrls: ['./loan-admin.component.css']
})
export class LoanAdminComponent implements OnInit {

  UserRequest_loan: any[];
  loan_wait: any[] = [];
  selectedAll: any;
  selected: any;
  typeCertifyLetter: string;
  constructor(private loanService: LoanService) { }
  //
  private getDate() {
    const d: any = new Date();
    const year: any = d.getFullYear().toString();
    let month: any = d.getMonth() + 1;
    let day: any = d.getDate().toString();
    let hour: any = d.getHours();
    let minute: any = d.getMinutes();
    let second: any = d.getSeconds();

    if (month.toString().length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }
    if (hour.toString().length < 2) { hour = '0' + hour; }
    if (minute.toString().length < 2) { minute = '0' + minute; }
    if (second.toString().length < 2) { second = '0' + second; }

    const result = [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
    return result;
  }
  // get data request
  ngOnInit() {
    this.loanService
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
    this.UserRequest_loan.forEach(e => {
      e.selected = event.target.checked;
      if (e.selected === true) {
        this.loan_wait.push(e);
        console.log(this.loan_wait);
      }
    });
  }
  //
  //
  // Checkbox select and return log select
  checkIfAllSelected() {
    this.selected = this.UserRequest_loan.every((e) =>
      e.selected === true),
      this.UserRequest_loan.forEach(e => {
        if (e.selected === true) {
          this.loan_wait.push(e);
          console.log(this.loan_wait);

        }
      }
      );
    console.log('............................');
  }
  //
  //
  //
  submit() {
    if (this.loan_wait.length === 0) {
      swal({
        type: 'error',
        title: 'ERROR',
        text: 'Something went wrong!',
        // footer: '<a href>Why do I have this issue?</a>',
      });
    }
    this.loan_wait.forEach(e => {
      if (e.typeLoan === 'CarLoan') {
        const ticketID = e.ticketID;
        const modifiedAt = this.getDate();
        const status = 3;

        this.loanService.updateCarloan(
          ticketID,
          modifiedAt,
          status,
        )
          .subscribe(res => {
            console.log(res);
          });
      } else if (e.typeLoan === 'Emergency') {
        const ticketID = e.ticketID;
        const modifiedAt = this.getDate();
        const status = 3;
        this.loanService.updateEmergency(
          ticketID,
          modifiedAt,
          status
        ).subscribe(res => {
          console.log(res);
        });
      } else if (e.typeLoan === 'ParentalMedicalCareloan') {
        const ticketID = e.ticketID;
        const modifiedAt = this.getDate();
        const status = 3;
        this.loanService.updateParentalMedicalCareloan(
          ticketID,
          modifiedAt,
          status
        ).subscribe(res => {
          console.log(res);
        });
      } else {
        console.log('Error');
      }
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
