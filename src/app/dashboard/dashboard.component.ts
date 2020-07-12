import { Component, OnInit } from '@angular/core';
import { VmModels } from '../models/vm.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vm_info: VmModels;

  constructor() { }

  ngOnInit(): void {
    this.vm_info = {
      name: 'CentOS7-pgrelet.ir2021',
      lifetime: 248463484,
      vmid: 2045,
      status: 'running',
      os: 'Linux 5.x - 2.6 Kernel',
      ip: '192.168.2.30',
      cpu: 1,
      cores: 1,
      interfaces: '[virtio=6E:2E:E6:1B:EE:13,bridge=vmbr1] - [virtio=9A:70:B8:53:DD:85,bridge=vmbr0]',
      cpuusage: 1,
      cpuusagemax: 100,
      mem: 402,
      maxmem: 1024,
      stockage: 45.3,
      stockagemax: 80
    };
  }

}
