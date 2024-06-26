import { Component } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe: any;
  id: any;



  constructor(private shoppingService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {


  }

  toShoppingList() {

    this.shoppingService.addIgnedientsToList(this.recipe.ingredients);
  }


  onEditRcepie() {

    this.router.navigate(['edit'], { relativeTo: this.route });
  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getSingleRecipe(this.id);
    });
  }


}
