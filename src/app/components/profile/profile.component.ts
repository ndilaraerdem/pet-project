import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateUserService } from 'src/app/services/update-user.service';
import { getUser } from 'src/app/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], //same
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    userId: new FormControl('', [Validators.required]), // same
    userName: new FormControl('', [Validators.required]),
    userSurname: new FormControl('', [Validators.required]),
    userPhone: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.email, Validators.required]),
    userPass: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    face: new FormControl('0'),
    faceID: new FormControl(''),
  });

  constructor(
    private updateUserService: UpdateUserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initFormValue();
  }

  update() { //type
    if (this.profileForm.valid) {
      const sendParams = {
        ref: environment.ref,
        userId: this.profileForm.value['userId'],
        userName: this.profileForm.value['userName'],
        userSurname: this.profileForm.value['userSurname'],
        userMail: this.profileForm.value['userEmail'],
        userPhone: this.profileForm.value['userPhone'],
        userPass: this.profileForm.value['userPass'],
      };
      this.updateUserService.userUpdate(sendParams).subscribe((data) => {
        const userData = data.user[0];
        const status = userData.durum;
        if (status) {
          this.updateSessionStorage();
          this.toastr.success('Updated User Profile');
        }
      });
    } else {
      this.toastr.warning('Please enter all values correctly!');
    }
  }
  updateSessionStorage() {
    const sessionStorageData = {
      userId: this.profileForm.value['userId'],
      userName: this.profileForm.value['userName'],
      userSurname: this.profileForm.value['userSurname'],
      userEmail: this.profileForm.value['userEmail'],
      userPhone: this.profileForm.value['userPhone'],
      face: this.profileForm.value['face'],
      faceID: this.profileForm.value['faceID'],
    };
    sessionStorage.setItem('user', JSON.stringify(sessionStorageData));
  }

  initFormValue() {
    this.profileForm.controls['userId'].setValue(getUser()!.userId);
    this.profileForm.controls['userName'].setValue(getUser()!.userName);
    this.profileForm.controls['userSurname'].setValue(getUser()!.userSurname);
    this.profileForm.controls['userEmail'].setValue(getUser()!.userEmail);
    this.profileForm.controls['userPhone'].setValue(getUser()!.userPhone);
    }
}
