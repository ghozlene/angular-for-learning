import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: any;

  constructor(private recipeService: RecipeService) { }


  onSelectRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);

  };
}
