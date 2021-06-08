import TagResearch from './search/TagResearch.js';
import {toggleDropdown} from './DOM/domDropdown.js';
import {addTagContent} from './DOM/domTag.js';
import SearchServices from './search/SearchServices/SearchServices.js';

function eventKeyupInput() {
  // Define search bar in each button
  const inputIngr = document.getElementById('inputIngr');
  const inputAppa = document.getElementById('inputAppa');
  const inputUste = document.getElementById('inputUste');
  // Define each list of button
  const contIngr = document.getElementById('contIngr');
  const contAppa = document.getElementById('contAppa');
  const contUste = document.getElementById('contUste');

  inputIngr.addEventListener('keyup', () => {TagResearch.filterFunction(inputIngr, contIngr);});
  inputAppa.addEventListener('keyup', () => {TagResearch.filterFunction(inputAppa, contAppa);});
  inputUste.addEventListener('keyup', () => {TagResearch.filterFunction(inputUste, contUste);});
}

function eventClickIcon() {
  // Define icon of each dropdown
  const iconIngr = document.getElementById('iconIngr');
  const iconAppa = document.getElementById('iconAppa');
  const iconUste = document.getElementById('iconUste');

  // Define each dropdown
  const dropdownIngr = document.getElementById('dropdownIngr');
  const dropdownAppa = document.getElementById('dropdownAppa');
  const dropdownUste = document.getElementById('dropdownUste');

  iconIngr.addEventListener('click', () => {toggleDropdown(dropdownIngr);}); 
  iconAppa.addEventListener('click', () => {toggleDropdown(dropdownAppa);});  
  iconUste.addEventListener('click', () => {toggleDropdown(dropdownUste);});
}

function eventKeyupSearchBar() {
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keyup', SearchServices.launchSearch);
}

function eventClickLink() {
  // Define each list of button
  const contIngr = document.getElementById('contIngr');
  const contAppa = document.getElementById('contAppa');
  const contUste = document.getElementById('contUste');
  // Create an array with all a
  const links = [];
  links.push(...contIngr.getElementsByTagName('a'));
  links.push(...contAppa.getElementsByTagName('a'));
  links.push(...contUste.getElementsByTagName('a'));

  links.forEach((link) => {
    link.addEventListener('click', () => {
      addTagContent(link.innerHTML, link.parentElement.id);
    });
  });
}

export {eventKeyupInput, eventClickIcon, eventKeyupSearchBar, eventClickLink}
