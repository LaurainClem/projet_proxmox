import { Component, OnInit } from '@angular/core';
import { NodeModels } from '../models/node.models';
import { ProxmoxService } from '../services/proxmox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  nodes: Array<NodeModels>;

  constructor(private proxmoxService: ProxmoxService, private router: Router) { }

  ngOnInit(): void {
    this.proxmoxService.getNodes().subscribe((result => {
      this.nodes = result;
    }));
  }

  gotoVmList(nodeid) {
    this.proxmoxService.nodeSelected = nodeid;
    this.router.navigateByUrl('vm');
  }

}
