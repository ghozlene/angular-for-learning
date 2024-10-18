import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingSubscription: Subscription;
  constructor(private shoppingService: ShoppingListService) { }
  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ingredients = this.shoppingService.getIngredientArray();
    this.ingSubscription = this.shoppingService.ingredientChange.subscribe(
      (ingrredients: Ingredient[]) => {
        this.ingredients = ingrredients;
      });
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.ingSubscription.unsubscribe();
  }
}
