import { Component, OnInit } from '@angular/core';
import { ProxmoxService } from '../services/proxmox.service';
import { VmsModel } from '../models/vms.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private proxmoxService: ProxmoxService) { }

  vms: Array<VmsModel>;
  formatData = (percent: number) => `${percent} %`;

  ngOnInit() {
    this.proxmoxService.getVms().subscribe(result => {
      this.vms = result;
    });
  }

  formatEth(eth): string {
    let interfaces = '';
    eth.forEach(interf => {
      interfaces = interfaces + interf + '\n';
    });
    return interfaces;
  }

  switchStatusVm(vm: VmsModel) {
    if (vm.status === 'running') {
      this.proxmoxService.changeStatusVm('shutdown').subscribe(() => {
        this.proxmoxService.getVms().subscribe(result => {
          this.vms = result;
          for (let i = 0; i < this.vms.length; i++) {
            if (this.vms[i].vmid === vm.vmid) {
              this.vms[i].status = 'stopped';
            }
          }
        });
      });
    } else {
      this.proxmoxService.changeStatusVm('start').subscribe(() => {
        this.proxmoxService.getVms().subscribe(result => {
          this.vms = result;
          for (let i = 0; i < this.vms.length; i++) {
            if (this.vms[i].vmid === vm.vmid) {
              this.vms[i].status = 'running';
            }
          }
        });
      });
    }
    /* this.proxmoxService.changeStatusVm(vm.status === 'running' ? 'shutdown' : 'start').subscribe(() => {
      this.proxmoxService.getVms().subscribe(result => {
        this.vms = result;
      });
    }); */
  }

}
