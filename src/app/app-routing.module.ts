import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './project/components/components.component';
import { RecipesComponent } from './project/components/recipes/recipes.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './project/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'

  },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },

  {
    path: 'shopping-list', component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
