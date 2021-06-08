import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from './services/spinner.service';
import { HelperService } from 'src/app/Services/helper.service';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'RadixWebsite';
  data: any;

  constructor(public router: Router , private service: HelperService,
    private spinnerService: SpinnerService){   
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
           gtag('config', 'G-4KWK3K049T', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}
  ngAfterViewInit(): void {
    //this.loadInitaildata();
  }

  loadInitaildata() {

    this.spinnerService.show();
    this.service.GetInitialData().subscribe(res => {
      let response = res;
      this.data = res;
      this.spinnerService.hide();
    }, err => {
      this.spinnerService.hide();
    })

  }
}



