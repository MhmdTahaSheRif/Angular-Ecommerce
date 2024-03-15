import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Iuser } from '../../models/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signnup.component.html',
  styleUrl: './signnup.component.css',
})

export class SignupComponent {
  user: Iuser = {email:'', password:'' };
  userform!:FormGroup;

  constructor(
    private authService: AuthService, private router: Router,private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  getIsError(controlName: string, errorname: string) {
    return (
      this.userform.controls[controlName].dirty &&
      this.userform.controls[controlName].touched &&
      this.userform.controls[controlName].errors?.[errorname]
    );
  }

  onSubmit(signupForm: any) {
    console.log("ttttttt")
    this.authService.signup(signupForm.value).subscribe((data) => {
      console.log(data);
      confirm(`You are Sign in successfully Ya ${this.user.email}`)
    });
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
