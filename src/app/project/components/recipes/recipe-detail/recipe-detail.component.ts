import { Component, Input } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe: any;

  constructor(private shoppingService: ShoppingListService) {


  }

  toShoppingList() {

    this.shoppingService.addIgnedientsToList(this.recipe.ingredients);

  }
}
