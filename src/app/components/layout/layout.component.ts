import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit,AfterContentInit {
  isLoading: boolean = true;
  constructor() { }


  ngAfterContentInit(): void {
   
  }

  ngOnInit(): void {
    //this.hideloader();
    //this.loadUser();
  }
/** Function is defined
        hideloader() {
          document.getElementById("#loading").animate({
            top: -200
          }, 1500);        
      
        }
        loadUser(){
          let interval = setInterval(() => { 
            if (this.isLoading) {
              //You are still waiting
              document.getElementById("loading")
            }
          }, 3000)   
          this.isLoading = false;
          clearInterval(interval);**/
}