import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  constructor(private recipeService: RecipeService) {

  };
  recipeChoosed: any;
  value: number = 100;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {

      this.recipeChoosed = recipe;
    });
  }


}
