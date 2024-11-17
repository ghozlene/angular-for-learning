import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";



@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }


  storeRecipe() {
    const recipes = this.recipeService.getRecipe();

    this.http.put('https://testing-b8046-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }


  fetchRecipes() {


    return this.http.get<Recipe[]>(
      'https://testing-b8046-default-rtdb.firebaseio.com/recipes.json',

    ).pipe(

      map((recipes: any) => {

        return recipes.map((recipe: any) => ({
          ...recipe,
          ingredients: recipe.ingredients || []
        }));
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}


