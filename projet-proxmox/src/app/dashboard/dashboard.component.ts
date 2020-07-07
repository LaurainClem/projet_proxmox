import { Component, OnInit } from '@angular/core';
import { ProxmoxService } from '../services/proxmox.service';
import { VmsModel } from '../models/vms.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vms: Array<VmsModel>;

  constructor(private proxmoxService: ProxmoxService) { }

  ngOnInit() {
    this.proxmoxService.getVms().subscribe(result => {
      this.vms = result;
    });
  }

}
