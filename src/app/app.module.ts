import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { SecondServerComponent } from './components/second-server/second-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './exercices/test1/test1.component';
import { ComponentsComponent } from './project/components/components.component';
import { HeaderComponent } from './project/header/header.component';
import { RecipesComponent } from './project/components/recipes/recipes.component';
import { RecipeListComponent } from './project/components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/components/shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './project/directives/basic.highlight';
import { BetterHighlightDirective } from './project/directives/better-highlight.directive';
import { CustomDirectiveDirective } from './project/directives/custom-directive.directive';
import { DropdownDirective } from './project/components/shared/dropdown.directive';
import { RecipeDirective } from './project/components/services/recipe.directive';
import { ShoppingListDirective } from './project/components/services/shopping-list.directive';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';
import { EditComponent } from './project/components/recipes/edit/edit.component';
import { Test2FormsComponent } from './components/exercices/test2-forms/test2-forms.component';
import { ReactiveFormTestComponent } from './components/exercices/reactive-form-test/reactive-form-test.component';
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SecondServerComponent,
    Test1Component,
    HeaderComponent,
    ComponentsComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    CustomDirectiveDirective,
    DropdownDirective,
    RecipeDirective,
    ShoppingListDirective,
    RecipeStartComponent,
    EditComponent,
    Test2FormsComponent,
    ReactiveFormTestComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
