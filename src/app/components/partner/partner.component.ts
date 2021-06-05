import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonService } from 'src/app/services/common.service';
=======
import { CommonService } from 'src/app/Services/common.service';
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {
<<<<<<< HEAD

  partners:[];
  constructor(private service: CommonService) { }

  ngOnInit(): void {

    this.service.getPartners().subscribe(res => {
      let result = res;
      this.partners = result.Result;

    }, err => {

=======
  partners: any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.GetPartners().subscribe(res=>{
      let response=res;
      this.partners=response.Result;
      console.log(this.partners);
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e
    })
  }

}
