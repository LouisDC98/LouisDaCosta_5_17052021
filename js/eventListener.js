import {filterFunction} from './search/tagSearch.js';
import {toggleDropdown} from './DOM/domDropdown.js';
import {launchSearch} from './search/search.js';
import {addTagContent} from './DOM/domTag.js';

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

function eventClickLink() {
// Create an array with all a
const links = [];
links.push(...contIngr.getElementsByTagName('a'));
links.push(...contAppa.getElementsByTagName('a'));
links.push(...contUste.getElementsByTagName('a'));

links.forEach((link) => {
  link.addEventListener('click', () => {
    addTagContent(link.innerHTML, link.parentElement.id);
    launchSearch();
  });
});
}

export {eventKeyupInput, eventClickIcon, eventKeyupSearchBar, eventClickLink}
