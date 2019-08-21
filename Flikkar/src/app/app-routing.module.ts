import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/login/component/login.component'
import { SignUpComponent } from './module/sign-up/component/sign-up.component';
import { JobPostComponent } from './module/job-post/component/job-post.component';
import { FaqComponent } from './module/faq/component/faq.component';
import { ContactUsComponent } from './module/contact-us/component/contact-us.component';
import { HomeComponent } from './module/home/component/home.component';
import { JobDetailComponent } from './module/job-detail/job-detail.component';


const routes: Routes = [

  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path:'sign-up', component:SignUpComponent},
  { path:'job-post', component:JobPostComponent},
  { path:'contact-us', component:ContactUsComponent},
  { path:'home', component:HomeComponent},
  { path:'job-detail', component:JobDetailComponent},
  {path:'faq',component:FaqComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
