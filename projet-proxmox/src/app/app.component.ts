import { Component, OnInit } from '@angular/core';
import { ProxmoxService } from './services/proxmox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;

  constructor(private proxService: ProxmoxService) {}

  ngOnInit() {
    this.proxService.getNodes().subscribe(result =>  console.log(result));
  }
}
