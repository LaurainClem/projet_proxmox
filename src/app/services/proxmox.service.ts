import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { NodeModels } from '../models/node.models';
import { AuthService } from './auth.service';
import { VmModels } from '../models/vm.models';

@Injectable({
  providedIn: 'root'
})
export class ProxmoxService {

  nodeSelected: string;
  vmidSelected: number;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getNodes(): Observable<Array<NodeModels>> {
    return this.http.post<Array<NodeModels>>(`${environment.baseUrl}/${Api.nodes}`, this.authService.getCredentials());
  }

  getVms(): Observable<Array<VmModels>> {
    return this.http.post<Array<VmModels>>(`${environment.baseUrl}/${Api.nodes}/${this.nodeSelected}`, this.authService.getCredentials());
  }

  getVmInfo(): Observable<VmModels> {
    return this.http.post<VmModels>(`${environment.baseUrl}/${Api.nodes}/${this.nodeSelected}/${Api.vm}/${this.vmidSelected}`,
    this.authService.getCredentials());
  }

  shutdownVm(): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${Api.nodes}/${this.nodeSelected}/${Api.vm}/${this.vmidSelected}/shutdown`,
    this.authService.getCredentials());
  }

  startVm(): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${Api.nodes}/${this.nodeSelected}/${Api.vm}/${this.vmidSelected}/start`,
    this.authService.getCredentials());
  }

  sendCommand(): Observable<string> {
    return this.http.post<string>(`${environment.baseUrl}/${Api.nodes}/${this.nodeSelected}/${Api.vm}/${this.vmidSelected}/age`,
    this.authService.getCredentials());
  }
}
