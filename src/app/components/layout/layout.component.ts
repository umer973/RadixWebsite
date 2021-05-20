import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.hideloader();
  }
/** Function is defined
        hideloader() {
          document.getElementById("#loading").animate({
            top: -200
          }, 1500);        
      
        }**/
}