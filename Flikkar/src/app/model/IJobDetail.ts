export interface IJobDetail {

    id: number
    jobId : string
    jobTitle : string
    jobCategoryId : string
    jobProfileId : string
    companyName : string
    companyDetail : string
    mobile : string
    email : string
    locality:string
    minSalary : number
    maxSalary : number
    cityId : string
    minExperience : number
    maxExperience : number
    jobDescription : string
    modifiedBy : string
    modifiedOn : Date
    createdBy : string
    createdOn : Date
   
}