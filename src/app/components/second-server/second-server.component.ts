import { Component } from '@angular/core';

@Component({
  selector: 'app-second-server',
  templateUrl: './second-server.component.html',
  styleUrls: ["./second-server.component.scss"]
})
export class SecondServerComponent {
  serverStatus = "offLine";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "onLine" : "offLine";
  }

  getServerStatus() {

    return this.serverStatus;
  }
  getColor() {

    return this.serverStatus === 'onLine' ? 'green' : 'red';
  }
}
