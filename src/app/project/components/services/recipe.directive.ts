import { Directive } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Directive({
  selector: '[appRecipe]'
})
export class RecipeDirective {

  constructor() { }

}
