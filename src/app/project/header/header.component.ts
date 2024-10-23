import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../components/shared/data-storage.service";
import { AuthService } from "src/app/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit, OnDestroy {


  private userSub: Subscription;
  isAuthenticated: boolean = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { };

  ngOnInit(): void {
    this.userSub = this.authService.userSubject.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
  }



  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSub.unsubscribe();
  }
}
