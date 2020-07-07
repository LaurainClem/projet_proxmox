import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { Observable } from 'rxjs';
import { NodesModel } from '../models/nodes.model';
import { VmsModel } from '../models/vms.model';

@Injectable({
  providedIn: 'root'
})
export class ProxmoxService {

  nodeSelected = 'proxmox1';
  vmSelected =  2045;

  constructor(private http: HttpClient) {}

  getNodes(): Observable<Array<NodesModel>> {
    return this.http.get<Array<NodesModel>>(`${environment.baseUrl}/${Api.get_nodes}`);
  }

  getVms(): Observable<Array<VmsModel>> {
    return this.http.get<Array<VmsModel>>(`${environment.baseUrl}/${Api.get_nodes}/${this.nodeSelected}`);
  }

  changeStatusVm(status: 'start' | 'shutdown'): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${Api.get_nodes}/${this.nodeSelected}/${this.vmSelected}/${status}`);
  }
}
