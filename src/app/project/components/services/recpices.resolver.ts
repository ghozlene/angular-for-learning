import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";


@Injectable({
  providedIn: 'root',
})
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(private dataStorageServices: DataStorageService, private recipeSerive: RecipeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {

    const recipes = this.recipeSerive.getRecipe();
    if (recipes.length === 0) {
      console.log("recipe from resolver ", recipes);
      return this.dataStorageServices.fetchRecipes();
    } else {
      return recipes;
    }

  }

}
