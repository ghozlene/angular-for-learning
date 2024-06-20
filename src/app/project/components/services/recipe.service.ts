import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [

    new Recipe('a test recipe', 'this is a test recipe', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg')
    , new Recipe('a test recipe 2 ', 'this is a test recipe 2', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg')
  ];


  getRecipe() {
    return this.recipes.slice();
  }
  constructor() { }
}
