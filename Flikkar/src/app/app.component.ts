import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobService } from './service/job.service';
import { IJobProfile } from './shared/model/IJobProfile';
import { IJobType } from './shared/model/IJobType';
import { IIndustry } from './shared/model/IIndustry';
import { IQualification } from './shared/model/IQualification';
import { IAcademicType } from './shared/model/IAcademicType';
import { ISubject } from './shared/model/ISubject';
export interface City {
  id: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected jobProfile: IJobProfile[];
  protected jobType: IJobType[];
  protected industry: IIndustry[];
  protected qualification: IQualification[];
  protected academicType: IAcademicType[];

  city: City[] = [
    { id: 'Varanasi', value: 'Varanasi' }
  
  ];

  jobFreshness: string[] = [
    'Last 30 Days', 'Last 15 Days', 'Last 7 Days', 'Last 3 Days', 'Last 1 Days'
  ];
  salary: string[] = [
    '5000', '10000', '15000', '20000', '25000', '30000', '35000', '40000'
  ];
  experience: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private filterForm: FormGroup;
  subject: ISubject[];

  constructor(private fb: FormBuilder, private toaster: ToastrService, private _jobService: JobService) {

  }
  ngOnInit() {
    this.filterForm = this.fb.group({
      jobFreshness: [''],
      city: [''],
      userId: [''],
      jobProfile: [''],
      academicType: [''],
      experience: [''],
      Subject: [''],
      qualification: [''],
      jobType: [''],
      salary: ['']
    });
    this.getAllJobType();
    this.getAllQualification();
    this.getAllJobProfile();
    this.clearAllFilters();
    this.getAllAcademicType();
    this.getAllSubject();
  }
  getAllSubject(){
    this._jobService
    .getAllSubject()
    .subscribe((data: ISubject[]) => this.subject = data,
    error => () => {
       // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
     
    });
  }
  getAllAcademicType(){
    this._jobService
    .getAllAcademicType()
    .subscribe((data: IAcademicType[]) => this.academicType = data,
    error => () => {
       // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
     
    });
  }
  setSelectedProfileId(jobProfileId: string) {
   this._jobService.setProfileIdFromDropDownSelection=jobProfileId;
   console.log('ProfileId=',this._jobService.getProfileIdFromDropDownSelection)
  }
  clearAllFilters() {
    this.filterForm.reset();
  }
  getAllJobType() {
    this._jobService
      .getAllJobType()
      .subscribe((data: IJobType[]) => this.jobType = data,
        error => () => {
          console.log('error');
        },
        () => {
          // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
          // this.slimLoadingBarService.complete();
          console.log('success' + JSON.stringify(this.jobProfile));
        });

  }
  getAllQualification() {
    this._jobService
      .getAllQualification()
      .subscribe((data: IQualification[]) => this.qualification = data,
        error => () => {
          // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
        },
        () => {
          // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
          // this.slimLoadingBarService.complete();
        });

  }
  getAllJobProfile() {
    this._jobService
      .getAllJobProfile()
      .subscribe((data: IJobProfile[]) => this.jobProfile = data,
        error => () => {
          // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
        },
        () => {
          // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
          // this.slimLoadingBarService.complete();
        });

  }

}

