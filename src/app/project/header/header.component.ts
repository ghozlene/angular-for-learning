import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {

  @Output() headerNavigation = new EventEmitter();


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  navigation(event: any) {

    this.headerNavigation.emit(event.target.innerText);

  }

}
