import { Component, OnInit } from '@angular/core';
import { Downloads} from 'src/app/model/downloads.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HelperService } from 'src/app/Services/helper.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html'
})
export class DownloadsComponent implements OnInit {
  
  downloadForm: FormGroup;
  isSubmitted: false;
  downloads :Downloads;
  constructor(private formBuilder: FormBuilder, private service: HelperService, 
    private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    this.createFormControls();
  }
   
  createFormControls() {

    this.downloadForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      ContactNo: ['', Validators.required],
      Source: ['', Validators.required],
    });
  }
  get f() { return this.downloadForm.controls }

  onSubmit() {

    if (this.downloadForm.valid) {

      this.downloads = this.downloadForm.getRawValue();
      console.warn(this.downloads);
      this.spinnerService.show();
      
      this.service.insertDownloads(this.downloads).subscribe(res => {
        console.log(res);
        let result: any = res;
        if (result.StatusCode == 200) {
                  
          if(result.Result!=undefined || result.Result!=null){
            window.location.href = "http://backofficeservice.theradix.in/Downloads/Visual%20Studio%20Code.zip";
            alert('Form Submitted')
            this.downloadForm.reset();
          }
          else{
            alert('Invalid');
          }
        }
        this.spinnerService.hide();

      }, err => {

        alert("Internal server error");

      });

      this.downloadForm.reset();
      this.spinnerService.hide();
    }

  }

/*popup*/
 open_popup() {
  document.getElementById("form_popup").style.display = "block";
 }
 close_popup() {
  document.getElementById("form_popup").style.display = "none";
 }
 
}
