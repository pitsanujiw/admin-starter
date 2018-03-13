import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {

  constructor(private http: Http) { }
  private url_loan = 'http://localhost:3000/api/loan';

  public showAllLoan() {
    return this.http.get(`${this.url_loan}/all`).map(e => e.json());
  }
  public updateCarloan(
    ticketID: string,
    modifiedAt: any,
    status: number,
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt' : modifiedAt,
      'status' : status,
    };
    return this.http.put(`${this.url_loan}/carloan/update`, body).map( e => e.json());
  }
  public updateEmergency(
    ticketID: string,
    modifiedAt: any,
    status: number,
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt' : modifiedAt,
      'status' : status,

    };
    return this.http.put(`${this.url_loan}/emergency/update`, body).map( e => e.json());
  }
  public updateParentalMedicalCareloan(
    ticketID: string,
    modifiedAt: any,
    status: number,
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt' : modifiedAt,
      'status' : status,
    };
    return this.http.put(`${this.url_loan}/parentalMedical/update`, body).map( e => e.json());
  }
}
