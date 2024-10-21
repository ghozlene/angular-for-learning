import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

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
    console.log(this.recipeForm);
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
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
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
        'name': new FormControl(),
        'amount': new FormControl()
      })

    );
  }
}
