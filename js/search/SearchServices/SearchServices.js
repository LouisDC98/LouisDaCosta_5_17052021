import MainSearch from './MainSearch.js';
import SearchParams from '../SearchParams.js';
import { eventKeyupSearchBar } from '../../eventListener.js';
import { displayRecipes } from '../../DOM/domRecipes.js';
import { displayTags } from '../../DOM/domDropdown.js';


// Compare inputs with datas in recipes.js and return an array with recipies
class SearchServices {
  constructor() {
    this.recipes = MainSearch.research(new SearchParams());
  }

  static launchSearch() {
    const searchParams = new SearchParams();
    console.log(searchParams);
    const searchServices = new SearchServices();
    console.log(searchServices);
    displayRecipes(MainSearch.research(searchParams));
    displayTags(MainSearch.research(searchParams));
  };

}

export default SearchServices ;

eventKeyupSearchBar();
