import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
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
}