import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = [];
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private authService:AuthService
    ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
  }

  login() {
    const sendParams = {
      ref: environment.ref,
      userEmail: this.loginForm.controls['email'].value,
      userPass: this.loginForm.controls['password'].value,
      face: 'no',
    };
    if (this.loginForm.valid) {
      this.loginService.userLogin(sendParams).subscribe((data) => {
        const user = data.user[0];
        const status = user.durum;
        if (status) {
          this.toastr.success('SUCCESSFUL!', 'User Login');
          sessionStorage.setItem('user', JSON.stringify(user.bilgiler));
          this.router.navigate(['/home']);
        } else {
          this.toastr.error('FAIL!', 'User Login');
        }
      });
    } else {
      this.toastr.error('Your account name or password is incorrect!', 'User Login');
    }
  }
}
