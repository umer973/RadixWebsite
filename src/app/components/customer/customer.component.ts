import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/Services/helper.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  clients: any;

  constructor(private service: HelperService) { }

  ngOnInit(): void {

    this.service.GetClients().subscribe(res => {
      let result = res;
      this.clients = result;
      console.log(this.clients);
    })
  }
}
