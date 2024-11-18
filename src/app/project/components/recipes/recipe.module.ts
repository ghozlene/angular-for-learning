import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDirective } from "../services/recipe.directive";
import { RecipeStartComponent } from "../../recipes/recipe-start/recipe-start.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BetterHighlightDirective } from "../../directives/better-highlight.directive";
import { RecipesRoutingModule } from "./recipes-router.module";



@NgModule({

  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeDirective,
    RecipeStartComponent,
    BetterHighlightDirective,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeDirective,
    RecipeStartComponent,
    BetterHighlightDirective,
  ],
})
export class RecipeModule { }
