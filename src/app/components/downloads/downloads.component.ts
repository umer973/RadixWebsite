import { Component, OnInit } from '@angular/core';
import { Downloads} from 'src/app/model/downloads.model';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html'
})
export class DownloadsComponent implements OnInit {

  downloads :Downloads;
  constructor( private service: CommonService) { }

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
