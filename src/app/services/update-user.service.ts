import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser';
import { getUser } from '../utils'; // remove if not use

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  constructor(private http: HttpClient) {}
  userUpdate(params: any) { // try to avoid "any" type
    const path = environment.url + 'userSettings.php';
    return this.http.get<IUser>(path, { params: params });
  }
}
