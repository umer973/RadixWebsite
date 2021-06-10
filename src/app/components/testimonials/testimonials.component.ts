import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {
  testimonials:any;
  constructor(private service: HelperService) { }

  ngOnInit(): void {
    this.service.Gettestimonials().subscribe(res => {
    let result = res;
    this.testimonials = result;
    console.log(this.testimonials);
  });
 }
}
