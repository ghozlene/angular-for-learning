import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  recipeChoosed: any;
  value: number = 100;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.recipeChoosed);
  }

  getChoosedRecipe(recipe: any) {
    this.recipeChoosed = recipe;
    console.log(this.recipeChoosed);
  }
}
