import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { PartnerComponent } from './components/partner/partner.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DownloadsComponent } from './components/downloads/downloads.component';

const routes: Routes = [

      {
            path: '', component: LayoutComponent,
            children: [
              { path: 'home', component: MainComponent },
              { path: '', redirectTo: '/home', pathMatch: 'full' },
              { path: 'contact-us', component: ContactUsComponent },
              { path: 'about-us', component: AboutUsComponent },
              { path: 'partner', component: PartnerComponent },
              { path: 'customer', component: CustomerComponent },
              { path: 'downloads', component: DownloadsComponent },
            ]
          },
];


@NgModule({
   imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
