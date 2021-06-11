import { Component, OnInit } from '@angular/core';
import { Downloads } from 'src/app/model/downloads.model';
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
  downloads: Downloads;
  message : any;
  downloadUrl = 'http://backofficeservice.theradix.in/Downloads/Visual%20Studio%20Code.zip'

  constructor(private formBuilder: FormBuilder, private service: HelperService,
    private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.createFormControls();
  }

  createFormControls() {

    this.downloadForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      ContactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
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

          if (result.Result != undefined || result.Result != null) {
            window.location.href =this.downloadUrl;
              this.downloadForm.reset();
              this.spinnerService.hide()
              this.message= document.getElementById("msg");
              this.message = 'We have received your information and your preferred software is downloading.';
          }
          else {

          }
          // this.spinnerService.hide();  
        }


      }, err => {


        this.spinnerService.hide();

      });

      this.downloadForm.reset();

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
