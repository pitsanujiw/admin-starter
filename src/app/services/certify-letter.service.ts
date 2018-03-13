import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CertifyLetterService {

  do(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  private url = 'http://localhost:3000/api/certifyLetter';
  // tslint:disable-next-line:member-ordering
  private url_loan = 'http://localhost:3000/api/loan';
  constructor(private http: Http) { }

  public showAllCertifyLetter() {
    return this.http.get(`${this.url}/all`).map(e => e.json());
  }
  public showAllLoan() {
    return this.http.get(`${this.url_loan}/all`).map(e => e.json());
  }

  public deleteCertifyLetter(ticketID: string) {
    return this.http.delete(`${this.url}/delete?ticketID=${ticketID}`).map(e => e.json());
  }

  public updateEmploymentCertifyLetter(
    ticketID: string,
    status: number,
    modifiedAt: any
  ) {
    const body = {
      'ticketID': ticketID,
      'status': status,
      'modifiedAt': modifiedAt
    };
    return this.http.put(`${this.url}/employmentCertifyLetter/update`, body).map(e => e.json());
  }


  public updateCertifyLetterForHousingLoan(
    ticketID: string,
    status: number,
    numberOfCopy: any,
    modifiedAt: any
  ) {
    const body = {
      'ticketID': ticketID,
      'status': status,
      'modifiedAt': modifiedAt,
      'owner.numberOfCopy': numberOfCopy,
    };
    return this.http.put(`${this.url}/certifyLetterForHousingLoan/update`, body).map(e => e.json());
  }

  public updateCertifyLetterForFurtherEducation(
    ticketID: string,
    status: number,
    modifiedAt: any
  ) {
    const body = {
      'ticketID': ticketID,
      'status': status,
      'modifiedAt': modifiedAt
    };
    return this.http.put(`${this.url}/certifyLetterForFurtherEducation/update`, body).map(e => e.json());
  }

  public updateCertifyLetterForTouristVisaApplication(
    ticketID: string,
    status: number,
    modifiedAt: any
  ) {
    const body = {
      'ticketID': ticketID,
      'status': status,
      'modifiedAt': modifiedAt
    };
    return this.http.put(`${this.url}/certifyLetterForTouristVisaApplication/update`, body).map(e => e.json());
  }

  updateCertifyLetterForBusinessVisaApplication(
    ticketID: string,
    status: number,
    modifiedAt: any
  ) {

    const body = {
      'ticketID': ticketID,
      'status': status,
      'modifiedAt': modifiedAt
    };
    return this.http.put(`${this.url}/certifyLetterForBusinessVisaApplication/update`, body).map(e => e.json());

  }

}
