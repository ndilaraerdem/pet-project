import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddress } from '../models/IAddress';
import { getUser} from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getAddressList(): Observable<IAddress> {
    const userData = getUser();
    console.log("userData",userData!.userId); // remove all console.log() before push in main branch (or before create PR)
    const sendParams = {
      ref: environment.ref,
      musterilerID: userData!.userId
    };
    const path = environment.url + 'addressList.php';
    return this.http.get<IAddress>(path, { params: sendParams });
  }

  createAddress(params: any){ // types
    const path = environment.url + 'addressAdd.php';
    console.log(path); // same
    console.log(params); // same, use console for test purposes only when it's needed

    return this.http.get(path, { params: params });
  }

  removeAddress(params: any){ // types
    const path = environment.url + 'addressDelete.php';
    return this.http.get(path, { params: params });
  }
}
