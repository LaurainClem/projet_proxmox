import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  password: string;
  realm: string;
  ticket: string;
  CSRFPrevention: string;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
    if (localStorage.getItem('password')) {
      this.password = localStorage.getItem('password');
    }
    if (localStorage.getItem('realm')) {
      this.realm = localStorage.getItem('realm');
    }
  }

  getAuth(): void {
    this.http.post(`${environment.baseUrl}/${Api.auth}`,
    {
      username: this.username,
      password: this.password,
      realm: this.realm
    }).subscribe((auth_data: any) => {
      this.ticket = auth_data.ticket;
      this.CSRFPrevention = auth_data.CSRFPrevention;
    });
  }

  isLoggedIn(): boolean {
    return this.ticket !== undefined && this.CSRFPrevention !== undefined;
  }
}
