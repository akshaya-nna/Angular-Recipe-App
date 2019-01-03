import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chicken', 'Roasted chicken recipe', 'https://www.pamperedchef.com/iceberg/com/recipe/75018-lg.jpg',[
      new Ingredient('chicken',1),
      new Ingredient('herbs', 5)
    ]),
    new Recipe('Fish', 'Fish fry recipe', 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/zatarains/c/2000/creole-mustard-battered-fish.ashx?vd=20180710T053409Z&hash=3CE36D502093BD0BAF10A37A825CAD4A393B03C7',[
      new Ingredient('fish', 2),
      new Ingredient('chillies',10)
    ])

  ];
  constructor(private slService: ShoppingListService) { }

  getRecipies() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngFromRecipes(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
