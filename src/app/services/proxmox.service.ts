import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { NodeModels } from '../models/node.models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProxmoxService {

  nodeSelected: string;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getNodes(): Observable<Array<NodeModels>> {
    return this.http.post<Array<NodeModels>>(`${environment.baseUrl}/${Api.nodes}`, this.authService.getCredentials());
  }
}
