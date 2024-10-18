import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();
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
    this.ingredientChange.next(this.ingredients.slice());
  }


  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }


  addIgnedientsToList(ingredients: Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(newIngredient: Ingredient, index: number) {
    this.ingredients[index] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());
  }
  removeIngredient(index: number) {

    this.ingredients.splice(index, 1);
    this.ingredientChange.next(this.ingredients.slice());

  }
}
