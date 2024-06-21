import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  @Output() ingredientChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [

    new Ingredient('apple', 2),
    new Ingredient('orange', 3),
  ];
  constructor() { }

  getIngredientArray(): Ingredient[] {

    return this.ingredients.slice();
  }

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

  addIgnedientsToList(ingredients: Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}
