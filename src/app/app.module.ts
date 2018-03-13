import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AdmincertifyComponent } from './components/admincertify/admincertify.component';
import { EmployeeadminComponent } from './components/admincertify/employeeadmin/employeeadmin.component';
import { CertifyLetterService } from './services/certify-letter.service';
import { LoanService } from './services/loan.service';
import { LoanAdminComponent } from './components/admincertify/loan-admin/loan-admin.component';
import { PrimengtableComponent } from './components/primengtable/primengtable.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

const routers: Routes = [
  { path: 'employeeadmin', component: EmployeeadminComponent },
  { path: 'loanAdmin', component: LoanAdminComponent },
  {path: 'prime' , component: PrimengtableComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AdmincertifyComponent,
    EmployeeadminComponent,
    LoanAdminComponent,
    PrimengtableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule

  ],
  providers: [
    CertifyLetterService,
    LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
