import { Component, OnInit } from '@angular/core';
import { NodeModels } from '../models/node.models';
import { ProxmoxService } from '../services/proxmox.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  nodes: Array<NodeModels>;

  constructor(private readonly proxmoxService: ProxmoxService) { }

  ngOnInit(): void {
    this.proxmoxService.getNodes().subscribe((result => {
      this.nodes = result;
    }));
  }

}
