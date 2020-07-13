import { Component, OnInit } from '@angular/core';
import { VmModels } from '../models/vm.models';
import { ProxmoxService } from '../services/proxmox.service';
import { Router } from '@angular/router';
import * as prettyMilliseconds from 'pretty-ms';
import { startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.css']
})
export class VmComponent implements OnInit {

  vms: VmModels[];

  constructor(public proxmoxService: ProxmoxService, public router: Router) { }

  ngOnInit(): void {
    interval(60000).pipe(startWith(0)).subscribe(() => {
      this.proxmoxService.getVms().subscribe(result => {
        this.vms = result;
      });
    });
  }

  gotoDashboard(vmid: number): void {
    this.proxmoxService.vmidSelected = vmid;
    this.router.navigateByUrl('/dashboard');
  }

  pretty(nb: number): string {
    return prettyMilliseconds(nb);
  }

}
