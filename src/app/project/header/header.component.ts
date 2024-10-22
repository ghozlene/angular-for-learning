import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../components/shared/data-storage.service";

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {


  constructor(private dataStorageService: DataStorageService) { };

  ngOnInit(): void {

  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }
}
