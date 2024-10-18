import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredients.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }


  private recipes: Recipe[] = [

    new Recipe('a test recipe', 'this is a test recipe', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg', [

      new Ingredient('meat', 5),
      new Ingredient('french fries', 20)
    ])
    , new Recipe('a test recipe 2 ', 'this is a test recipe 2', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg',

      [

        new Ingredient('buns', 5),
        new Ingredient('meat', 10)
      ]
    )
  ];


  getRecipe() {
    return this.recipes.slice();
  }

  getSingleRecipe(index: number): Recipe {
    return this.recipes[index];

  };
}
