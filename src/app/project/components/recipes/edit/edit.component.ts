import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  id: number = 0;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });

  }

  onSubmit() {
    //const newRecipe = new Recipe(this.recipeForm.value['name'],

    //  this.recipeForm.value['description'],
    //  this.recipeForm.value['imagepath'],
    //  this.recipeForm.value['ingredients'],

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

  }
  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';

    let recipeIngredients = new FormArray<FormGroup<{
      name: FormControl<string | null>;
      amount: FormControl<number | null>;
    }>>([]);
    if (this.editMode) {
      const recipe = this.recipeService.getSingleRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      "ingredients": recipeIngredients
    });
    console.log(this.recipeForm);
  }
  get ingredients(): FormArray {
    console.log(this.recipeForm.get('ingredients') as FormArray);
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onAddIngredient() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
      })

    );
  }
}
