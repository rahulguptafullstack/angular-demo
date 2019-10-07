import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Home'} },
  { path: 'about-us', component: AboutUSComponent, data: {title: 'About Us'}},
  { path: 'contact-us', component: ContactUsComponent, data: {title: 'Contact Us'} },
  { path: 'career', component: CareerComponent, data: {title: 'Career'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
