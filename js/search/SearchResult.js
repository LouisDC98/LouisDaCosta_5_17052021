import { displayRecipes } from '../DOM/domRecipes.js';
import { displayTags } from '../DOM/domDropdown.js';

class SearchResult {
  // Display all recipes if all inputs are empty
  // Display searchTagsRecipesResult if at least one tag is selected and no main input
  // Display union between searchTagsRecipesResult and searchMainRecipesResult if tags and main input are not empty
  static displayResult(searchMainRecipesResult, searchTagsRecipesResult, searchParams) {
    let displayedResult = searchMainRecipesResult;
    if (searchParams.appareils.length > 0 || searchParams.ingredients.length > 0 || searchParams.ustensiles.length > 0) {
      if (searchParams.main.length > 0) {
        displayedResult = searchTagsRecipesResult.filter((x) => searchMainRecipesResult.includes(x));
      } else {
        displayedResult = searchTagsRecipesResult;
      }
    }
    displayRecipes(displayedResult);
    displayTags(searchMainRecipesResult);
  }
}

export default SearchResult;
