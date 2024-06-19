import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  data = "THIS IS ME baby";
  serverCreationStates = "server was created";
  allowServer = false;
  serverName = 'test test';
  servers = ['server1', 'server2', 'server3'];
  constructor() {


  }
  onCreateServer() {

    this.serverCreationStates = "server was created | name is " + this.serverName;
    this.allowServer = !this.allowServer;

    this.servers.push(this.serverName);
    return this.allowServer;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;

  }

  onUpdateServerStatus() {

    this.allowServer = true;

    this.serverCreationStates = "server was created";
    return this.allowServer;
  }
}
