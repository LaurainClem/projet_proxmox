import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  ticket: string;
  CSRFPreventionToken: string;

  constructor(private http: HttpClient, private router: Router, private message: NzMessageService) {
  }

  getAuth(username: string, password: string, realm: string): void {
    this.http.post(`${environment.baseUrl}/${Api.auth}`,
    {
      username,
      password,
      realm
    }).pipe(
      catchError( error => {
      if ( !(error.error instanceof ErrorEvent)) {
        if (error.status !== 200) {
          this.message.warning('Email ou mot de passe incorrect');
          return of(true);
        }
    }})).subscribe((auth_data: any) => {
      this.ticket = auth_data?.ticket;
      this.CSRFPreventionToken = auth_data?.CSRFPreventionToken;
      this.username = auth_data?.username;
      this.router.navigateByUrl('/node');
    });
  }

  isLoggedIn(): boolean {
    return this.ticket !== undefined && this.CSRFPreventionToken !== undefined;
  }

  getRealm(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/realms`);
  }

  getDisconected() {
    this.username = undefined;
    this.CSRFPreventionToken = undefined;
    this.ticket = undefined;
    this.router.navigateByUrl('/login');
  }

  getCredentials(): {ticket: string, CSRFPreventionToken: string} {
    return {
      ticket: this.ticket,
      CSRFPreventionToken: this.CSRFPreventionToken
    };
  }
}
