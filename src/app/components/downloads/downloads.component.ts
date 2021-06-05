import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html'
})
export class DownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*popup*/
 open_popup() {
  document.getElementById("form_popup").style.display = "block";
 }
 close_popup() {
  document.getElementById("form_popup").style.display = "none";
 }
 
}
