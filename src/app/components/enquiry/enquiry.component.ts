import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Enquiry } from 'src/app/model/enquiry.model';
import { HelperService } from 'src/app/Services/helper.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html'
})
export class EnquiryComponent implements OnInit {
  
  enquiryForm: FormGroup;
  isSubmitted: false;
  enquiry: Enquiry;
  constructor(private formBuilder: FormBuilder, private service: HelperService) { }


  ngOnInit(): void {
    this.createFormControls();
    /**this.service.insertEnquiry().subscribe(res=>{
      console.log(res);
    })**/
  }
  createFormControls() {

    this.enquiryForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Trade: ['', Validators.required],
      Email: ['', Validators.required],
      ContactNo: ['', Validators.required],
      Comments: ['', Validators.required],
      ExistingUser: ['', Validators.required],
    });
  }
  get f() { return this.enquiryForm.controls }

  /**onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.enquiryForm.valid) {
      console.warn(this.enquiryForm.value);
      alert('Enquiry Submitted')
      this.enquiryForm.reset();

    }
  }**/
  onSubmit() {

    if (this.enquiryForm.valid) {

      this.enquiry = this.enquiryForm.getRawValue();
      console.warn(this.enquiry);

      this.service.insertEnquiry(this.enquiry).subscribe(res => {
        console.log(res);
        let result: any = res;
        if (result.StatusCode == 200) {
                  
          if(result.Result!=undefined || result.Result!=null){
            alert('Enquiry Submitted')
            this.enquiryForm.reset();
          }
          else{
            alert('Invalid Enquiry');
          }
        }

      }, err => {

        alert("Internal server error");

      });

      this.enquiryForm.reset();

    }

  }

}
