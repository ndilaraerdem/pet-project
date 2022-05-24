import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  path = environment.url + 'userRegister.php' // please, use the same structure everywhere: "const path" or just global variable as here
  userRegister( params: any):any{ // type: any, any
    return this.http.get(this.path, { params: params })
  }
}
