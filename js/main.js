import recipes from './data/recipes.js';
import {displayRecipes} from './DOM/domRecipes.js';
import {addTagContent} from './DOM/domTag.js';
import {launchSearch} from './search/search.js';

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

displayRecipes(recipes);
