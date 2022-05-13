import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressList } from 'src/app/models/IAddress';
import { AddressService } from 'src/app/services/address.service';
import { getUser } from 'src/app/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  allAddress: AddressList[] = [];
  tempAddressList: AddressList[] = [];
  searchText: string = '';

  filterForm: FormGroup = new FormGroup({
    addressType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
  });
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  searchAddress() {
    this.tempAddressList = this.allAddress.filter(
      (address) =>
        address.il
          ?.toString()
          .toLowerCase()
          .includes(this.filterForm.controls['country'].value.toLowerCase()) &&
        address.ilce
          ?.toString()
          .toLowerCase()
          .includes(this.filterForm.controls['city'].value.toLowerCase()) &&
        address.not
          ?.toString()
          .toLowerCase()
          .includes(
            this.filterForm.controls['addressType'].value.toLowerCase()
          ) &&
        address.kapiNo
          ?.toString()
          .toLowerCase()
          .includes(
            this.filterForm.controls['postalCode'].value.toLowerCase()
          ) &&
        address.adres
          ?.toString()
          .toLowerCase()
          .includes(this.filterForm.controls['address'].value.toLowerCase())
    );
  }

  getAddress() {
    this.addressService.getAddressList().subscribe((data) => {
      this.allAddress = data.addressList!;
      this.tempAddressList = data.addressList!;
    });
  }
  deleteAddress(addressID: string) {
    const answer = confirm('Are you sure?');
    if (answer) {
      const userData = getUser();
      const sendParams = {
        ref: environment.ref,
        musterilerID: userData!.userId,
        adresID: addressID,
      };

      this.addressService.removeAddress(sendParams).subscribe((data) => {
        this.getAddress();
      });
    }
  }
}
