import recipes from './recipes.js';
import Tag from './tag.js';
import DOMService from './domService.js';
import SearchService from './searchService.js';

const DOMServ = new DOMService();
const tagService = new Tag();

DOMServ.iconIngr.addEventListener('click', () => {
  DOMServ.toggleDropdown(DOMServ.dropdownIngr);
});

DOMServ.iconAppa.addEventListener('click', () => {
  DOMServ.toggleDropdown(DOMServ.dropdownAppa);
});

DOMServ.iconUste.addEventListener('click', () => {
  DOMServ.toggleDropdown(DOMServ.dropdownUste);
});

DOMServ.inputIngr.addEventListener('keyup', () => { SearchService.filterFunction(DOMServ.inputIngr, DOMServ.contIngr); });
DOMServ.inputAppa.addEventListener('keyup', () => { SearchService.filterFunction(DOMServ.inputAppa, DOMServ.contAppa); });
DOMServ.inputUste.addEventListener('keyup', () => { SearchService.filterFunction(DOMServ.inputUste, DOMServ.contUste); });

DOMService.displayRecipes(recipes);

const arrayIngr = [];
const arrayAppa = [];
const arrayUste = [];
recipes.forEach((recipe) => {
  recipe.appliance.forEach((appliance) => {
    if (arrayAppa.indexOf(appliance) === -1) {
      arrayAppa.push(appliance);
    }
  });
  recipe.ustensils.forEach((ustensil) => {
    if (arrayUste.indexOf(ustensil) === -1) {
      arrayUste.push(ustensil);
    }
  });
  recipe.ingredients.forEach((ingredient) => {
    if (arrayIngr.indexOf(ingredient.ingredient) === -1) {
      arrayIngr.push(ingredient.ingredient);
    }
  });
});

arrayIngr.sort();
arrayUste.sort();
arrayAppa.sort();

DOMService.createContent(arrayIngr, arrayAppa, arrayUste);

// Create an array with all a
const links = [];
links.push(...DOMServ.contIngr.getElementsByTagName('a'));
links.push(...DOMServ.contAppa.getElementsByTagName('a'));
links.push(...DOMServ.contUste.getElementsByTagName('a'));

links.forEach((link) => {
  link.addEventListener('click', () => {
    tagService.addTag(link.innerHTML, link.parentElement.id);
  });
});
