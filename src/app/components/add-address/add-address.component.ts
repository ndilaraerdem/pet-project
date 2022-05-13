import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';
import { countries, getUser } from 'src/app/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  addressAddForm: FormGroup = new FormGroup({
    addressType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
  });
  countries : any[] = [];
  constructor(
    private addressService: AddressService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countries = countries();
  }

  addAddress() {
    const userData = getUser();
    const addressParams = {
      ref: environment.ref,
      musterilerID: userData!.userId,
      il: this.addressAddForm.value['country'],
      ilce: this.addressAddForm.value['city'],
      Mahalle: 'mahalle',
      adres: this.addressAddForm.value['address'],
      kapiNo: this.addressAddForm.value['postalCode'],
      notBilgi: this.addressAddForm.value['addressType'],
    };
    this.addressService.createAddress(addressParams).subscribe((data) => {
      this.toastr.success('You added new address');
      this.router.navigate(['/address'])
    });
  }
}
