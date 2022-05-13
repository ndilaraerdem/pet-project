import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  path = environment.url + 'userRegister.php'
  userRegister( params: any):any{
    return this.http.get(this.path, { params: params })
  }
}
