import { SearchServicesInput } from './SearchServicesInput.js';
import { SearchParams } from '../SearchParams.js';

// Compare inputs with datas in recipes.js and return an array with recipies
class SearchServices {
  constructor() {
    this.recipes = SearchServicesInput.research(new SearchParams());
  }
}

export { SearchServices };
