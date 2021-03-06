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
  message:any;
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
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      ContactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
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
            //alert('Enquiry Submitted');
            this.message= document.getElementById("msg");
            this.message = 'We have received your enquiry and we"ll get back to you very soon.';
            this.enquiryForm.reset();
          }
          else{
            
          }
        }

      }, err => {

        

      });

      this.enquiryForm.reset();

    }

  }

}
