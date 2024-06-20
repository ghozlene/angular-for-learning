import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Output() recipeElement = new EventEmitter();
  recipes: Recipe[] = [

    new Recipe('a test recipe', 'this is a test recipe', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg')
    , new Recipe('a test recipe 2 ', 'this is a test recipe 2', 'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg')
  ];


  onSelectedRecipe(recipe: any) {

    this.recipeElement.emit(recipe);

  }
}
