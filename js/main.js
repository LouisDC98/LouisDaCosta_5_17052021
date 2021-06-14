import recipes from './data/recipes.js';
import displayRecipes from './DOM/domRecipes.js';
import { eventKeyupSearchBar, eventClickIcon, eventKeyupInput } from './eventListener.js';
import { displayTags } from './DOM/domDropdown.js';

displayRecipes(recipes);
displayTags(recipes);
eventKeyupSearchBar();
eventClickIcon();
eventKeyupInput();
