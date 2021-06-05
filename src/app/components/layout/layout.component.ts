import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
<<<<<<< HEAD
export class LayoutComponent implements OnInit {

  clients:any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
 
  }
=======
export class LayoutComponent implements OnInit,AfterContentInit {
  constructor() { }
  ngAfterContentInit(): void {
  }
  ngOnInit(): void {
  }
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e
}