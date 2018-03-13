import { Component, OnInit } from '@angular/core';
import { CertifyLetterService } from '../../services/certify-letter.service';

@Component({
  selector: 'app-primengtable',
  templateUrl: './primengtable.component.html',
  styleUrls: ['./primengtable.component.css']
})
export class PrimengtableComponent implements OnInit {
  UserRequest: any[];
  result: any[] = [];

  constructor(private certifyservices: CertifyLetterService) { }

  ngOnInit() {
    this.certifyservices
      .showAllCertifyLetter()
      .subscribe(res => {
        this.UserRequest = res.message;
        console.log(this.UserRequest);
      });
  }

  onRowSelect(event) {
    this.result = [];
    this.result.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
  }

  onRowUnselect(event) {
    this.result = [];
    this.result.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
  }
}
