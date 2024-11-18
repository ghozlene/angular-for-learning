import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { SecondServerComponent } from './components/second-server/second-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './exercices/test1/test1.component';
import { ComponentsComponent } from './project/components/components.component';
import { HeaderComponent } from './project/header/header.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/components/shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './project/directives/basic.highlight';
import { CustomDirectiveDirective } from './project/directives/custom-directive.directive';
import { DropdownDirective } from './project/components/shared/dropdown.directive';
import { ShoppingListDirective } from './project/components/services/shopping-list.directive';
import { EditComponent } from './project/components/recipes/edit/edit.component';
import { Test2FormsComponent } from './components/exercices/test2-forms/test2-forms.component';
import { ReactiveFormTestComponent } from './components/exercices/reactive-form-test/reactive-form-test.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ExercicePipeComponent } from './components/exercices/exercice-pipe/exercice-pipe.component';
import { ShortenPipe } from './components/exercices/exercice-pipe/shorten.pipe';
import { filterStates } from './components/exercices/exercice-pipe/filter-states.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './project/components/shared/loading-spinner/loading-spinner-component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { AlertComponent } from './project/components/shared/alert/alert.component';
import { RecipeModule } from './project/components/recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SecondServerComponent,
    Test1Component,
    HeaderComponent,
    ComponentsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,

    CustomDirectiveDirective,
    DropdownDirective,
    ShoppingListDirective,
    EditComponent,
    Test2FormsComponent,
    ReactiveFormTestComponent,
    ExercicePipeComponent,
    ShortenPipe,
    filterStates,
    AuthComponent,
    LoadingSpinner,
    AlertComponent



  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RecaptchaModule,
    HttpClientModule,
    RecipeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
