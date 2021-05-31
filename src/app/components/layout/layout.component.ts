import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  clients:any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
 
  }
}