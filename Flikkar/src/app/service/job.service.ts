import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Constant } from '../shared/constant/constant'
import { IJobDetail } from '../model/IJobDetail';
import { IJobProfile } from '../shared/model/IJobProfile';
import { IJobType } from '../shared/model/IJobType';
import { IIndustry } from '../shared/model/IIndustry';
import { IQualification } from '../shared/model/IQualification';
import { IAcademicType } from '../shared/model/IAcademicType';
import { ISubject } from '../shared/model/ISubject';
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private urlCreateJob: string = Constant.baseUrl + 'job/CreateJob';
  private urlGetAllJob: string = Constant.baseUrl + 'job/GetAllJobs';
  private urlGetAllJobProfile: string = Constant.baseUrl + 'Job/GetAllJobProfile';
  private urlGetAllJobType: string = Constant.baseUrl + 'Job/GetAllJobType';
  private urlGetAllIndustry: string = Constant.baseUrl + 'Job/GetAllIndustry';
  private urlGetAllQualification: string = Constant.baseUrl + 'Job/GetAllQualification';
  private urlGetJobByProfileId: string = Constant.baseUrl + 'job/GetJobByJobProfileId?{JobProfileId}';
  private urlGetAllAcademicType: string = Constant.baseUrl + 'Job/GetAllAcademicType';
  private urlGetAllSubject: string = Constant.baseUrl + 'job/GetAllSubject';

  protected jobProfileId: string;
  constructor(private http: HttpClient) {

  }
  getJobByJobProfileId(jobProfileId): Observable<IJobDetail[]> {
    return this.http.get<IJobDetail[]>(this.urlGetJobByProfileId, { params: { jobProfileId } });
  }
  getAllSubject(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.urlGetAllSubject);
  }
  getAllJob(): Observable<IJobDetail[]> {
    return this.http.get<IJobDetail[]>(this.urlGetAllJob);
  }
  getAllJobProfile(): Observable<IJobProfile[]> {
    return this.http.get<IJobProfile[]>(this.urlGetAllJobProfile);
  }

  saveJobDetail(userData) {
    return this.http.post<any>(this.urlCreateJob, userData)
  }
  getAllJobType(): Observable<IJobType[]> {
    return this.http.get<IJobType[]>(this.urlGetAllJobType);
  }
  getAllIndustry(): Observable<IIndustry[]> {
    return this.http.get<IIndustry[]>(this.urlGetAllIndustry);
  }
  getAllQualification(): Observable<IQualification[]> {
    return this.http.get<IQualification[]>(this.urlGetAllQualification);
  }
  set setProfileIdFromDropDownSelection(jobProfileId: string) {
    this.jobProfileId = jobProfileId;
  }
  get getProfileIdFromDropDownSelection(): string {
    return this.jobProfileId;
  }
  getAllAcademicType(): Observable<IAcademicType[]> {
    return this.http.get<IAcademicType[]>(this.urlGetAllAcademicType);
  }
}
