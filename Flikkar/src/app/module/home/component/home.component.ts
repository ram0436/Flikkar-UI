import { Component, OnInit, OnChanges } from '@angular/core';
import { JobService } from '../../../service/job.service';
import { IJobDetail } from 'src/app/model/IJobDetail';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';
import { throwIfEmpty } from 'rxjs/operators';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected values: IJobDetail[];
  protected jobsFiltersByProfileId: any[];
  protected profileId: string ;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this.profileId = this.getProfileIdByService();

   if(this.profileId===undefined)
    this.getAllJob();
   
   else 
     this.getJobByJobProfileId(this.profileId);

  }
  // HTML control call
  refresh(): void {
    window.location.reload();
  }
  public getJobDetail() {
    window.open('/job-detail');
  }
  //
  getProfileIdByService(): string {
    this.profileId = this._jobService.getProfileIdFromDropDownSelection;
    return this.profileId;

  }
  getJobByProfileId(profileId: string): any {
    if (this.values != undefined) {
      this.jobsFiltersByProfileId = this.values.filter(i => i.jobProfileId == profileId)
    }
  }
  public getAllJob() {
    this._jobService
      .getAllJob()
      .subscribe((data: IJobDetail[]) => {
        this.values = data;
       // this.getJobByProfileId(this.profileId);
      })
  }

  public getJobByJobProfileId(profileId) {
    this._jobService
      .getJobByJobProfileId(this.profileId)
      .subscribe((data: IJobDetail[]) => {
        this.values = data;
       // this.getJobByProfileId(this.profileId);
      })
  }
}
