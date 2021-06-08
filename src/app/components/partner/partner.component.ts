import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {

  partners:any;
  constructor(private service: HelperService) { }

  ngOnInit(): void {
    this.service.GetPartners().subscribe(res => {
    let result = res;
    this.partners = result;
    console.log(this.partners);
    })
  }
}
