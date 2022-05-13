import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { countries } from 'src/app/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  isLinear:boolean = true;
  //userId = '';
  countries : any[] = []

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    passwords: new FormGroup({
       pass : new FormControl('',[Validators.required]),
       confirmedPass : new FormControl('',[Validators.required])
    }, {validators:this.passwordCompareCheck}), 
    confirmPassword: new FormControl('')
  });  

  addressForm: FormGroup = new FormGroup({
    addressType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private addressService: AddressService,
    private registerService: RegisterService,
    private authService: AuthService,
    private router: Router
  ) {}
  //todo:/select-option/placeholder profile form / password check /
  ngOnInit(): void {
    this.countries = countries();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  passwordCompareCheck(passwords:AbstractControl):any{
    if(passwords.get("pass")!.value !== passwords.get('confirmedPass')!.value){
      return {invalid:true};
    }
  }

  register() {   
    if (this.userForm.valid && this.addressForm.valid) {
      this.sendUserInfo();
    } else {
      this.toastr.error('Empty Fields!');
    }
  }

  sendUserInfo() {
    //Sending Main Info
    const sendParams = {
      ref: environment.ref,
      userName: this.userForm.value['firstName'],
      userSurname: this.userForm.value['lastName'],
      userPhone: this.userForm.value['phone'],
      userMail: this.userForm.value['email'],
      userPass: this.userForm.get(['passwords','pass'])?.value
    };
    this.registerService.userRegister(sendParams).subscribe((data: any) => {
      const status = data.user[0].durum
      if (status) {
        const userId = data.user[0].kullaniciId
        this.sendAddressInfo(userId);
      }
    });
  }
  sendAddressInfo(userId: any) {
    //Sending Address Info
    const addressParams = {
      ref: environment.ref,
      musterilerID: userId,
      il: this.addressForm.value['country'],
      ilce: this.addressForm.value['city'],
      Mahalle: 'Neighborhood',
      adres: this.addressForm.value['address'],
      kapiNo: this.addressForm.value['postalCode'],
      notBilgi: this.addressForm.value['addressType'],
    };
    this.addressService.createAddress(addressParams).subscribe((data) => {
      this.toastr.success('Register Successful!');
      this.router.navigate(['/']);
    });
  }
}
