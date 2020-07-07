import { Component, OnInit } from '@angular/core';
import { ProxmoxService } from './services/proxmox.service';
import { NodesModel } from './models/nodes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  nodes: Array<NodesModel>;

  constructor(private proxService: ProxmoxService) {}

  ngOnInit() {
    this.proxService.getNodes().subscribe(result =>  {
      this.nodes = result;
    });
  }
}
