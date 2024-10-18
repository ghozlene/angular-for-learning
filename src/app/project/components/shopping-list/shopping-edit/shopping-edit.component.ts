import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @Output() addIngredientToList = new EventEmitter<Ingredient>();
  @ViewChild('form') slForm: NgForm;
  editMode: boolean = false;
  subscriptionEdit: Subscription;
  EditNumberIndex: number;
  editItem: Ingredient;
  constructor(private shoppingService: ShoppingListService) {

  }

  onAddIngredient(form: NgForm) {
    const newIngredient = {
      'name': form.value.name,
      'amount': form.value.amount
    };

    this.shoppingService.addIngredientToList(newIngredient);

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        console.log(index);
        this.EditNumberIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredient(index);


        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }
  ngOnDestroy(): void {

    this.subscriptionEdit.unsubscribe();
  }
}
