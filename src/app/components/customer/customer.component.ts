import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  clients: any;

  constructor(private service: CommonService) { }

  ngOnInit(): void {

    this.service.getClients().subscribe(res => {
      let result = res;
      this.clients = result.Result;

    }, err => {

    })
  }



}
