import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class ProxmoxService {

  user = {
    username: 'pgrelet.ir2021',
    password: '-F3PTP9MZNI',
    realm: 'authentification-AD',
    CSRFPreventionToken: '5F01D6B0:Eqk5z1vtMuoubMZlZrNPTyHWp3c',
    ticket: 'PVE:pgrelet.ir2021@authentification-AD:5F01D6B0::eDCOdHiWnFdCxibmNLKVUjyf+Ljg3gN+UY9p7p87vINZUOjQ7tjRFEq3XVcL3R/sHUfMPVrueQmalugX0MjoYflYBhcv2cPPb7ZVMOinZk1nR6B718jSRmXNl1uFXXdDVOyPcrLuO/+uVS1jdni2VWa6QhFM8EQVd61q5d9ntcULdgDKwEL4OLTv2jKPmgEF4rR2+sSdAKgdpBlOK/dJsDbGj28zRAPFbbTzN4nayWZMoMlxO3zBJm0G5fsXzbywiMlYSBsp2f58ed51fat/q39hc/Quyn3Q0tdnwN7xNi5/WnAIAgk0whMdMkL25waf3ctlk+AELyRMKr4Fz99tIA=='
  };

  headersCSRFPrev = new HttpHeaders({
    CSRFPreventionToken: this.user.CSRFPreventionToken
  });
  headersCookie = new HttpHeaders({
    Cookie: this.user.ticket
  });

  constructor(private http: HttpClient) {}

  getNodes(): Observable<any> {
    document.cookie = `PVEAuthCookie=${this.user.ticket}`;
    // Cookies.set('bob', 'bill');
    return this.http.get<any>(environment.baseUrl + Api.get_nodes, {withCredentials: true});
  }
}
