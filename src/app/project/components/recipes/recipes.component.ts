import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  constructor() {

  };
  recipeChoosed: any;
  value: number = 100;
  ngOnInit(): void {

  }


}
