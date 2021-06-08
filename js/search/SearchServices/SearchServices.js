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
    const searchTagsRecipesResult = SecondarySearch.tagsMatch(searchParams);
    displayRecipes(searchTagsRecipesResult);
    displayTags(searchMainRecipesResult);
  };

}

export default SearchServices ;

eventKeyupSearchBar();
