import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipeStartComponent } from "../../recipes/recipe-start/recipe-start.component";
import { RecipesResolver } from "../services/recpices.resolver";
import { EditComponent } from "./edit/edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes.component";


const routes: Routes = [

  {
    path: 'recipes',
    canActivate: [AuthGuard],
    component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: EditComponent },
      { path: ':id/edit', component: EditComponent, resolve: { RecipesResolver } },
      { path: ':id', component: RecipeDetailComponent, resolve: { RecipesResolver } }
    ]
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
