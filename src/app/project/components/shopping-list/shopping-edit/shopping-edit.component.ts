import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef | undefined;
  @ViewChild('inputAmount') inputAmount: ElementRef | undefined;
  @Output() addIngredientToList = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingListService) {

  }

  onAddIngredient() {
    const newIngredient = {
      'name': this.inputName?.nativeElement.value,
      'amount': this.inputAmount?.nativeElement.value
    };

    this.shoppingService.addIngredientToList(newIngredient);

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
