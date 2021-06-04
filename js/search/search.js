import { eventKeyupSearchBar } from '../eventListener.js';
import { SearchParams } from './SearchParams.js';
import { SearchServices } from './SearchServices/SearchServices.js';
import { SearchServicesInput } from './SearchServices/SearchServicesInput.js';
import { displayRecipes } from '../DOM/domRecipes.js';
import { displayTags } from '../DOM/domDropdown.js';

eventKeyupSearchBar();

function launchSearch() {
  const searchParams = new SearchParams();
  console.log(searchParams);
  const searchServices = new SearchServices();
  console.log(searchServices);
  displayRecipes(SearchServicesInput.research(searchParams));
  displayTags(SearchServicesInput.research(searchParams));
}
export { launchSearch };
