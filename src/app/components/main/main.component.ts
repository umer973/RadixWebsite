import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }
  //ScrolltoTop//
  buttonValue = document.getElementById("scrollToTopBtn");
  onActivate(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.buttonValue.style.display = "block";
    }
     else {
      this.buttonValue.style.display = "none";
    }
  }
// When the user clicks on the button, scroll to the top of the document
topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }

}
