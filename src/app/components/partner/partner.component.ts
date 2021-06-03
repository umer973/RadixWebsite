import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {
  partners: any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.GetPartners().subscribe(res=>{
      let response=res;
      this.partners=response.Result;
      console.log(this.partners);
    })
  }

}
