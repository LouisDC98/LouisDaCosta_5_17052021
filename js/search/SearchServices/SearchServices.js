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
    console.log('Filtre main : ',searchMainRecipesResult);
    console.log('Filtre tags : ',searchTagsRecipesResult)
    const ArrayTags = document.getElementsByClassName('tag')

    if (searchMainRecipesResult.length < 50) {
      displayRecipes(searchMainRecipesResult);
    }
    if (ArrayTags.length !== 0) {
      displayRecipes(searchTagsRecipesResult);
    }
    if (ArrayTags.length !== 0 && searchMainRecipesResult.length < 49 ) {
      var result = searchTagsRecipesResult.filter(x =>searchMainRecipesResult.includes(x));
      displayRecipes(result);
    }
    if (ArrayTags.length === 0 && searchMainRecipesResult.length === 50 ) {
      displayRecipes(recipes);
    }
    displayTags(searchMainRecipesResult);
  };

}

export default SearchServices ;

eventKeyupSearchBar();
