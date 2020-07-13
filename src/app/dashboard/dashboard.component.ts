import { Component, OnInit } from '@angular/core';
import { VmModels } from '../models/vm.models';
import { ProxmoxService } from '../services/proxmox.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vm_info: VmModels;
  switchStatus: boolean;
  command = '';

  constructor(private proxmoxService: ProxmoxService, public router: Router) { }

  ngOnInit(): void {
    interval(5000).pipe(startWith(0)).subscribe(() => {
      this.proxmoxService.getVmInfo()
      .subscribe((result) => {
        this.vm_info = result;
        this.switchStatus = (result.status === 'running');
      });
    });
  }

  switchStatusVm(status: 'running' | 'stopped') {
    if (status === 'running') {
      this.proxmoxService.shutdownVm().subscribe(() => {});
    } else {
      this.proxmoxService.startVm().subscribe(() => {});
    }
  }

  sendCommand(): void {
    
  }

}
