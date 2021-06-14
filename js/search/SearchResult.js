import { displayRecipes } from '../DOM/domRecipes.js';
import { displayTags } from '../DOM/domDropdown.js';

class SearchResult {
     static displayResult(searchMainRecipesResult, searchTagsRecipesResult, searchParams) {
        let displayedResult =  searchMainRecipesResult;
        if(searchParams.appareils.length > 0 || searchParams.ingredients.length > 0 || searchParams.ustensiles.length > 0){
          if(searchParams.main.length > 0){
            displayedResult = searchTagsRecipesResult.filter(x =>searchMainRecipesResult.includes(x));
          } else {
            displayedResult = searchTagsRecipesResult
          }
        }
        displayRecipes(displayedResult);
        displayTags(searchMainRecipesResult);
    }
}

export default SearchResult;
