import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../../service/job.service';
import { ToastrService } from 'ngx-toastr'; 
import { IJobProfile } from 'src/app/shared/model/IJobProfile';
import { IJobType } from 'src/app/shared/model/IJobType';
import { IIndustry } from 'src/app/shared/model/IIndustry';
import { IQualification } from 'src/app/shared/model/IQualification';
import { IAcademicType } from 'src/app/shared/model/IAcademicType';
import { ISubject } from 'src/app/shared/model/ISubject';
export interface JobProfile {
  id: string;
  value: string;
}
export interface Qualification {
  id: string;
  value: string;
}
export interface Industry {
  id: string;
  value: string;
}
export interface City {
  id: string;
  value: string;
}
export interface JobType {
  id: string;
  value: string;
}
@Component({
  selector: 'job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  private jobDetailForm: FormGroup;
  protected jobProfile: IJobProfile[];
  protected jobType: IJobType[];
  protected industry: IIndustry[];
  protected qualification: IQualification[];
  protected academicType: IAcademicType[];
  protected subject:ISubject[];
  
  city: City[] = [
    {id: 'Varanasi', value: 'Varanasi'}
  ];
  minExperience: number[] = [1,2,3,4,5,6,7,8,9,10];
  maxExperience: number[] = [1,2,3,4,5,6,7,8,9,10];
  minSalary: string[] = [
    '5000', '10000', '15000', '20000','25000','30000','35000','40000'
  ];
  maxSalary: string[] = [
    '5000', '10000', '15000', '20000','25000','30000','35000','40000'
  ];
  toasterService: any;

  constructor(
    private fb: FormBuilder,
    private _jobService: JobService,
    private toastr: ToastrService
  ) { }
 
  ngOnInit()  {

    this.getAllJobType();
    this.getAllQualification();
    this.getAllIndustry();
    this.getAllJobProfile();
    this.getAllAcademicType();
    this.getAllSubject();

    this.jobDetailForm = this.fb.group({
      JobTitle: ['', Validators.required],
      JobProfileId: [''],
      MinExperience: ['',Validators.required],
      MaxExperience: ['', Validators.required],
      CompanyName: ['', Validators.required],
      academicTypeId: ['', Validators.required],
      MinSalary: ['', Validators.required],
      MaxSalary: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      SubjectId: ['', Validators.required],
      JobTypeId: ['', Validators.required],
      QualificationId: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      JobDescription: ['', Validators.required],
      CompanyDetail: ['']

    });
  }
  protected onSubmit():void {
   // console.log('Form='+ JSON.stringify(this.jobDetailForm))
    this._jobService.saveJobDetail(this.jobDetailForm.value)
      .subscribe(
        response => console.log("Success", response),
        error => console.log("Error", error)
      )
      this.toastr.success('Record Saved Successfully!', 'Success!', {
        timeOut: 3000
      });
   // this.jobDetailForm.reset();
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
  getAllJobType(){
    this._jobService
    .getAllJobType()
    .subscribe((data: IJobType[]) => this.jobType = data,
    error => () => {
       this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
       console.log('success' + JSON.stringify(this.jobProfile));
    });
  
  }
  getAllQualification(){
    this._jobService
    .getAllQualification()
    .subscribe((data: IQualification[]) => this.qualification = data,
    error => () => {
       // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
       console.log('success' + JSON.stringify(this.jobProfile));
    });
  
  }
  getAllIndustry(){
    this._jobService
    .getAllIndustry()
    .subscribe((data: IIndustry[]) => this.industry = data,
    error => () => {
       // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
       console.log('success' + JSON.stringify(this.jobProfile));
    });
  
  }
  getAllJobProfile(){
    this._jobService
    .getAllJobProfile()
    .subscribe((data: IJobProfile[]) => this.jobProfile = data,
    error => () => {
       // this.toasterService.pop('error', 'Damn', 'Something went wrong...');
       console.log('error');
    },
    () => {
       // this.toasterService.pop('success', 'Complete', 'Getting all values complete');
       // this.slimLoadingBarService.complete();
       console.log('success' + JSON.stringify(this.jobProfile));
    });
  
  }


}
