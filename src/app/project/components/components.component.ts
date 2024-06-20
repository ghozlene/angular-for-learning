import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  switchEvent: string = 'Recipes';

  navigation(event: any) {

    this.switchEvent = event;

  }
}
