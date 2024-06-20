import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef | undefined;
  @ViewChild('inputAmount') inputAmount: ElementRef | undefined;
  @Output() addIngredientToList = new EventEmitter<Ingredient>();
  constructor() {

  }

  onAddIngredient() {
    const newIngredient = {
      'name': this.inputName?.nativeElement.value,
      'amount': this.inputAmount?.nativeElement.value
    };

    this.addIngredientToList.emit(newIngredient);

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
