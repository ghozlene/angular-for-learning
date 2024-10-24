import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-pipe',
  templateUrl: './exercice-pipe.component.html',
  styleUrls: ['./exercice-pipe.component.scss']
})
export class ExercicePipeComponent {

  appStatus = new Promise((resolove, reject) => {

    setTimeout(() => {
      resolove('stable');
    }, 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filterStatus = '';
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date; }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {

    this.servers.push({
      instanceType: 'small',
      name: 'new server',
      status: 'stable',
      started: new Date(15, 7, 2017)
    });
  }
}
