import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {

  partners:[];
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.GetPartners().subscribe(res => {
    let result = res;
    this.partners = result.Result;
    console.log(this.partners);
    })
  }
}
