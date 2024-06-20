import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: any;

  @Output() selectedRecipe = new EventEmitter<Object>();


  onSelectRecipe() {
    this.selectedRecipe.emit(this.recipe);

  };
}
