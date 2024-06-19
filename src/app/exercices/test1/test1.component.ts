import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  username = '';
  status = false;


  verifyUserName() {
    if (this.username !== '') {
      this.status = !this.status;
    };
    return this.status;
  }
  resetUsername() {

    this.username = '';
    this.status = !this.status;
  }
}
