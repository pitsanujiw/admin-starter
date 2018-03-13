import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CertifyLetterService } from '../../../services/certify-letter.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-employeeadmin',
  templateUrl: './employeeadmin.component.html',
  styleUrls: ['./employeeadmin.component.css']
})
export class EmployeeadminComponent implements OnInit {

  // tslint:disable-next-line:max-line-length


  UserRequest: any[];
  selected: boolean;
  result: any[] = [];

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

  constructor(private certifyService: CertifyLetterService) { }
  // get data request
  //
  ngOnInit() {
    this.certifyService
      .showAllCertifyLetter()
      .subscribe(
        res => {
          if (res.status === true) {
            this.UserRequest = res.message;
            console.log('OK GET DATA SUCCESS');
            console.log(this.UserRequest);
          } else {
            swal('error data respones');
          }
        }
      );
  }

  //

  // checkbox selectAll
  selectAll(event) {
    this.UserRequest.forEach(e => {
      e.selected = event.target.checked;
      if (e.selected === true) {
        this.result.push(e);
      }
    }
    );
  }

  // check if Select???
  checkIfAllSelected(event) {

    this.selected = this.UserRequest.every((e) =>
      e.selected === true
    );
    this.UserRequest.forEach(e => {
      if (e.selected === true) {
        this.result.push(e);
      }
    }
    );
  }
  //
  //
  //
  submit() {
    console.log(this.result);

    if (this.result.length === 0) {
      swal({
        type: 'error',
        title: 'ERROR',
        text: 'Something went wrong!',
        // footer: '<a href>Why do I have this issue?</a>',
      });
    } else {
      this.result.forEach(e => {
        e.selected = false;
        if (e.typeCertifyLetter === 'employmentCertifyLetter') {
          const TricketID = e.ticketID;
          const modifiedAt = this.getDate();
          const status = 3;
          this.certifyService.updateEmploymentCertifyLetter(
            TricketID,
            status,
            modifiedAt
          )
            .subscribe(res => {
              console.log(res);
              console.log('update complete');
            });
        } else if (e.typeCertifyLetter === 'certifyLetterForHousingLoan') {
          const status = 3;
          const modifiedAt = this.getDate();
          const ticketID = e.ticketID;
          // tslint:disable-next-line:max-line-length
          const numberOfCopy = 'BBL : ' + e.owner.banks.BBL + '_' + 'GHB :' + e.owner.banks.GHB + '_' + 'LHBank :' + e.owner.banks.LHBank + '_' + 'UOB :' + e.owner.banks.UOB;
          this.certifyService.updateCertifyLetterForHousingLoan(
            ticketID,
            status,
            numberOfCopy,
            modifiedAt
          )
            .subscribe(res => {
              console.log(res);
              console.log('success');
            });
        } else if (e.typeCertifyLetter === 'certifyLetterForFurtherEducation') {
          const TicketID = e.ticketID;
          const status = 3;
          const modifiedAt = this.getDate();
          this.certifyService.updateCertifyLetterForFurtherEducation(
            TicketID,
            status,
            modifiedAt
          )
            .subscribe(res => {
              console.log(res);
              console.log('update complete');
            });
        } else if (e.typeCertifyLetter === 'certifyLetterForTouristVisaApplication') {
          const TicketID = e.ticketID;
          const status = 3;
          const modifiedAt = this.getDate();
          this.certifyService.updateCertifyLetterForTouristVisaApplication(
            TicketID,
            status,
            modifiedAt
          )
            .subscribe(res => {
              console.log(res);
            });
        } else if (e.typeCertifyLetter === 'certifyLetterForBusinessVisaApplication') {
          const TicketID = e.ticketID;
          const status = 3;
          const modifiedAt = this.getDate();
          this.certifyService.updateCertifyLetterForBusinessVisaApplication(
            TicketID,
            status,
            modifiedAt
          )
            .subscribe(res => {
              console.log(res);
            });
        } else {
          console.error('error');
        }
        swal(
          ' approve success !',
          'update complete !',
          'success'
        );
      });
      this.result = [];
    }
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
