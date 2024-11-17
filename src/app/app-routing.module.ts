import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './project/components/components.component';
import { RecipesComponent } from './project/components/recipes/recipes.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './project/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';
import { EditComponent } from './project/components/recipes/edit/edit.component';
import { RecipesResolver } from './project/components/services/recpices.resolver';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'

  },
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

  {
    path: 'shopping-list', component: ShoppingListComponent
  },
  {
    path: 'auth', component: AuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
