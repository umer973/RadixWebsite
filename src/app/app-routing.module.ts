import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

      {
            path: '', component: LayoutComponent,
            children: [
              { path: 'home', component: MainComponent },
              { path: '', redirectTo: '/home', pathMatch: 'full' },
              { path: 'contact-us', component: ContactUsComponent },
              { path: 'about-us', component: AboutUsComponent }
            ]
          },
];


@NgModule({
   imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
