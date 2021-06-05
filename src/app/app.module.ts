import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './components/layout/layout.module';
import { PartnerComponent } from './components/partner/partner.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { PriceComponent } from './components/price/price.component';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http'
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EnquiryComponent,
    AboutUsComponent,
    ContactUsComponent,
    ClientsComponent,
    LayoutComponent,
    PartnerComponent,
    CustomerComponent,
    DownloadsComponent,
    PriceComponent,
<<<<<<< HEAD
    
=======
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
>>>>>>> 629071a2d42ce8844d529de9cf9cf7697d9c743e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
