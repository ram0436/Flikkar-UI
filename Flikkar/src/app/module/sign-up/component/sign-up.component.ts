import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/Service/user.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private registrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
     private _userService: UserService,
     private toastr: ToastrService
     ) { }

  ngOnInit()  {
    this.registrationForm = this.fb.group({
      userId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
  }
  protected onSubmit():void {
    this._userService.saveUserDetail(this.registrationForm.value)
      .subscribe(
        response => console.log("Success", response),
        error => console.log("Error", error)
      )
      this.toastr.success('Record Saved Successfully!', 'Success!', {
        timeOut: 4000
      });
    this.registrationForm.reset();
    console.log('Submitted');
  }
  private clearAll(){
    this.registrationForm.controls['firstName'].setValue[""];
  }
}
