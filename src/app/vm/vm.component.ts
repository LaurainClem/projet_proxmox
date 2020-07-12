import { Component, OnInit } from '@angular/core';
import { VmModels } from '../models/vm.models';
import { ProxmoxService } from '../services/proxmox.service';
import { Router } from '@angular/router';
import * as prettyMilliseconds from 'pretty-ms';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.css']
})
export class VmComponent implements OnInit {

  vms: VmModels[];

  constructor(public proxmoxService: ProxmoxService, private router: Router) { }

  ngOnInit(): void {
    this.vms = [
      {
        name: 'CentOS7-pgrelet.ir2021',
        status : 'running',
        lifetime: 8006752,
        vmid: 2045
      },
      {
        name: 'Centos-7-Projet2',
        status : 'running',
        lifetime: 605230,
        vmid: 10000
      }
    ];
  }

  gotoDashboard(vmid: number): void {
    this.proxmoxService.vmidSelected = vmid;
    this.router.navigateByUrl('/dashboard');
  }

  pretty(nb: number): string {
    return prettyMilliseconds(nb);
  }

}
