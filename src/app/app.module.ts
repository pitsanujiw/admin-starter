import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdmincertifyComponent } from './components/admincertify/admincertify.component';
import { EmployeeadminComponent } from './components/admincertify/employeeadmin/employeeadmin.component';
import { CertifyLetterService } from './services/certify-letter.service';
import { LoanAdminComponent } from './components/admincertify/loan-admin/loan-admin.component';

const routers: Routes = [
  { path: 'employeeadmin', component: EmployeeadminComponent },
  { path: 'loanAdmin', component: LoanAdminComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdmincertifyComponent,
    EmployeeadminComponent,
    LoanAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    HttpModule,
    FormsModule
  ],
  providers: [CertifyLetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
