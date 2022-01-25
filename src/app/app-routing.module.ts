import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'volunteer', component: VolunteerComponent},
  {path: '', component : HomeComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
