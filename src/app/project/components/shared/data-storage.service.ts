import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";



@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }


  storeRecipe() {
    const recipes = this.recipeService.getRecipe();

    this.http.put('https://testing-b8046-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }
  fetchRecipe() {
    return this.http.get<Recipe[]>('https://testing-b8046-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {

        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        }
        ));

  }
}
