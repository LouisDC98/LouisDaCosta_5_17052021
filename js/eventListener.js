import TagResearch from './DOM/TagResearch.js';
import { toggleDropdown } from './DOM/domDropdown.js';
import { addTagContent } from './DOM/domTag.js';
import SearchServices from './search/SearchServices/SearchServices.js';

function eventKeyupInput() {
  const inputs = [...document.getElementsByClassName('dropbtn__search')];
  inputs.forEach((element) => {
    element.addEventListener('keyup', TagResearch.filterFunction);
  });
}

function eventClickIcon() {
  const icons = [...document.getElementsByClassName('arrow-down')];
  icons.forEach((element) => {
    element.addEventListener('click', toggleDropdown);
  });
}

function eventKeyupSearchBar() {
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keyup', SearchServices.launchSearch);
}

function eventClickLink() {
  // Create an array with all a
  const links = [...document.getElementsByClassName('dropdown__content__links')];
  links.forEach((link) => {
    link.addEventListener('click', () => {
      addTagContent(link.innerHTML, link.parentElement.id);
      TagResearch.hideSelectedTag();
    });
  });
}

export {
  eventKeyupInput, eventClickIcon, eventKeyupSearchBar, eventClickLink,
};
