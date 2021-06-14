import MainSearch from './MainSearch.js';
import SearchParams from '../SearchParams.js';
import { eventKeyupSearchBar } from '../../eventListener.js';
import { displayRecipes } from '../../DOM/domRecipes.js';
import { displayTags } from '../../DOM/domDropdown.js';
import recipes from '../../data/recipes.js';
import SecondarySearch from './SecondarySearch.js';

class SearchServices {
  constructor() {
    this.defaultRecipes = recipes;
  }

  static launchSearch() {
    const searchParams = new SearchParams();
    console.log(searchParams);
    const searchMainRecipesResult = MainSearch.research(searchParams);
    const searchTagsRecipesResult = SecondarySearch.tagsMatch(searchParams, recipes);
    console.log('Filtre main : ',searchMainRecipesResult);
    console.log('Filtre tags : ',searchTagsRecipesResult)
    
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
  };

}

export default SearchServices ;

eventKeyupSearchBar();
