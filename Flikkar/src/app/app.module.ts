import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './module/sign-up/component/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './module/login/component/login.component';
import { JobPostComponent } from './module/job-post/component/job-post.component';
import * as forms from '@angular/forms';
import { FaqComponent } from './module/faq/component/faq.component';
import { ContactUsComponent } from './module/contact-us/component/contact-us.component';
import { HomeComponent } from './module/home/component/home.component';
import {HttpClientModule}  from '@angular/common/http'
import { UserService } from './shared/Service/user.service';
import {ToastrModule, ToastrService} from  'ngx-toastr';
import { JobService } from './service/job.service';
import { JobDetailComponent } from './module/job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    JobPostComponent,
    FaqComponent,
    ContactUsComponent,
    HomeComponent,
    JobDetailComponent

  ],
  imports: [
    BrowserModule,
    forms.ReactiveFormsModule,
    forms.FormsModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut:100,
        positionClass: 'toast-top-right',
             
      }
    )
      ],
  providers: [
    UserService,
    JobService,
   ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
