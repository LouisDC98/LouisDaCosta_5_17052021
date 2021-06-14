import MainSearch from './MainSearch.js';
import SearchParams from '../SearchParams.js';
import { eventKeyupSearchBar } from '../../eventListener.js';
import recipes from '../../data/recipes.js';
import SecondarySearch from './SecondarySearch.js';
import SearchResult from '../SearchResult.js';

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
    SearchResult.displayResult(searchMainRecipesResult, searchTagsRecipesResult, searchParams)
  };

}

export default SearchServices ;

eventKeyupSearchBar();
