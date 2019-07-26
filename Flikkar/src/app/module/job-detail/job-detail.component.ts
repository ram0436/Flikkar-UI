import { Component, OnInit } from '@angular/core';
import { IJobDetail } from 'src/app/model/IJobDetail';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  protected values: IJobDetail[];
  protected values1: any[];
  //protected profileId:string;
  protected jobsFiltersByProfileId:IJobDetail[];
  profileId="JP-Software";
   constructor(private _jobService:JobService) { }
   ngOnInit() {
   
     this.getAllJob();
   this.getJobByProfileId(this.profileId);
   }
 
   public getJobDetail() {
     window.open('/job-detail');
 }
 getJobByProfileId(profileId:string) : any {
   
   this.jobsFiltersByProfileId = this.getAllJob();
  // this.values1=this.getAllJob();
   if(this.values1!=undefined)
   {
   return this.jobsFiltersByProfileId = this.values1.filter(i => i.JobProfileId == this.profileId)
   }
   return this.jobsFiltersByProfileId;
 }
 private getAllJob() : any {
   this._jobService
   .getAllJob()
   .subscribe((data: IJobDetail[]) => this.values = data,
   error => () => {
   },
   () => {
   });
 
 }
 }
 