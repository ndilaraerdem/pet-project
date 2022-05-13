import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  path = environment.url + 'userLogin.php';

  userLogin(params: any): Observable<IUser> {
    return this.http.get<IUser>(this.path, { params: params });
  }
}
