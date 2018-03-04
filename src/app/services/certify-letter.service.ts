import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CertifyLetterService {

  private url = 'http://localhost:3000/api/certifyLetter';
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
    modifiedAt: string,
    status: number,
    employeeID: number,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    note: string
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt': modifiedAt,
      'status': status,
      'owner.employeeID': employeeID,
      'owner.firstName': firstName,
      'owner.lastName': lastName,
      'owner.numberOfCopy': numberOfCopy,
      'owner.note': note
    };
    return this.http.put(`${this.url}/employmentCertifyLetter/update`, body).map(e => e.json());
  }

  public updateEmploymentCertifyLetter2(e) {
    return this.http.put(`${this.url}/employmentCertifyLetter/update`,e).map(e => e.json());
  }


  public updateCertifyLetterForHousingLoan(
    ticketID: string,
    modifiedAt: string,
    status: number,
    employeeID: number,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    note: string,
    BBL: number,
    GHB: number,
    LHBank: number,
    UOB: number
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt': modifiedAt,
      'status': status,
      'owner.employeeID': employeeID,
      'owner.firstName': firstName,
      'owner.lastName': lastName,
      'owner.note': note,
      'owner.numberOfCopy': numberOfCopy,
      'owner.banks.BBL': BBL,
      'owner.banks.GHB': GHB,
      'owner.banks.LHBank': LHBank,
      'owner.banks.UOB': UOB
    };
    return this.http.put(`${this.url}/certifyLetterForHousingLoan/update`, body).map(e => e.json());
  }

  public updateCertifyLetterForFurtherEducation(
    ticketID: string,
    modifiedAt: string,
    status: number,
    employeeID: number,
    firstName: string,
    lastName: string,
    numberOfCopy: number,
    note: string
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt': modifiedAt,
      'status': status,
      'owner.employeeID': employeeID,
      'owner.firstName': firstName,
      'owner.lastName': lastName,
      'owner.numberOfCopy': numberOfCopy,
      'owner.note': note

    };
    return this.http.put(`${this.url}/certifyLetterForFurtherEducation/update`, body).map(e => e.json());
  }

  public updateCertifyLetterForTouristVisaApplication(
    ticketID: string,
    modifiedAt: string,
    status: number,
    employeeID: number,
    firstName: string,
    lastName: string,
    firstNamePassport: string,
    lastNamePassport: string,
    numberOfCopy: number,
    passportNumber: string,
    passportExpiryDate: string,
    embassyForVisaApplication: string,
    countryOfVisit: string,
    from: string,
    to: string,
    note: string
  ) {
    const body = {
      'ticketID': ticketID,
      'modifiedAt': modifiedAt,
      'status': status,
      'owner.employeeID': employeeID,
      'owner.firstName': firstName,
      'owner.lastName': lastName,
      'owner.firstNamePassport': firstNamePassport,
      'owner.lastNamePassport': lastNamePassport,
      'owner.numberOfCopy': numberOfCopy,
      'owner.passportNumber': passportNumber,
      'owner.passportExpiryDate': passportExpiryDate,
      'owner.embassyForVisaApplication': embassyForVisaApplication,
      'owner.countryOfVisit': countryOfVisit,
      'owner.periodOfVisit.from': from,
      'owner.periodOfVisit.to': to,
      'owner.note': note
    };
    return this.http.put(`${this.url}/certifyLetterForTouristVisaApplication/update`, body).map(e => e.json());
  }

  certifyLetterForBusinessVisaApplicationSave(
    ticketID: string,
    modifiedAt: string,
    status: number,
    companyRegisteredName: string,
    country: string,
    employeeID: number,
    firstName: string,
    lastName: string,
    firstNamePassport: string,
    lastNamePassport: string,
    note: string,
    numberOfCopy: number,
    passportNumber: string,
    passportExpiryDate: string,
    from: string,
    to: string,
    purposeOfVisit: string,
    thomsonReutersOfficeYouPlanToVisit: string
  ) {

    const body = {
      'ticketID': ticketID,
      'modifiedAt': modifiedAt,
      'status': status,
      'owner.companyRegisteredName': companyRegisteredName,
      'owner.country': country,
      'owner.employeeID': employeeID,
      'owner.firstName': firstName,
      'owner.lastName': lastName,
      'owner.firstNamePassport': firstNamePassport,
      'owner.lastNamePassport': lastNamePassport,
      'owner.note': note,
      'owner.numberOfCopy': numberOfCopy,
      'owner.passportNumber': passportNumber,
      'owner.passportExpiryDate': passportExpiryDate,
      'owner.periodOfVisit.from': from,
      'owner.periodOfVisit.to': to,
      'owner.purposeOfVisit': purposeOfVisit,
      'owner.thomsonReutersOfficeYouPlanToVisit': thomsonReutersOfficeYouPlanToVisit

    };
    return this.http.put(`${this.url}/certifyLetterForBusinessVisaApplication/update`, body).map(e => e.json());

  }

}
