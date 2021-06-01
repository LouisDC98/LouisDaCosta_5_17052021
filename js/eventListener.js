import {filterFunction} from './search/tagSearch.js';
import {toggleDropdown} from './DOM/domDropdown.js';
import {launchSearch} from './search.js';

function eventKeyupInput() {
  inputIngr.addEventListener('keyup', () => {filterFunction(inputIngr, contIngr);});
  inputAppa.addEventListener('keyup', () => {filterFunction(inputAppa, contAppa);});
  inputUste.addEventListener('keyup', () => {filterFunction(inputUste, contUste);});
}

function eventClickIcon() {
  iconIngr.addEventListener('click', () => {toggleDropdown(dropdownIngr);}); 
  iconAppa.addEventListener('click', () => {toggleDropdown(dropdownAppa);});  
  iconUste.addEventListener('click', () => {toggleDropdown(dropdownUste);});
}

function eventKeyupSearchBar() {
  searchBar.addEventListener('keyup', launchSearch);
}

export {eventKeyupInput, eventClickIcon, eventKeyupSearchBar}
