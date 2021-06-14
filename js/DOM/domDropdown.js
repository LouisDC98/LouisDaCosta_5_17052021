import {eventClickIcon, eventClickLink} from '../eventListener.js';
import recipes from '../data/recipes.js';

eventClickIcon();

// Change placeholder when icon pressed
function modifyPlaceholders() {
  // Define new placeholder
  const textIngr = 'Recherche un ingrédient';
  const textAppa = 'Recherche un appareil';
  const textUste = 'Recherche un ustensile';
  // Define search bar in each button
  const inputIngr = document.getElementById('inputIngr');
  const inputAppa = document.getElementById('inputAppa');
  const inputUste = document.getElementById('inputUste');
  // Define each dropdown
  const dropdownIngr = document.getElementById('dropdownIngr');
  const dropdownAppa = document.getElementById('dropdownAppa');
  const dropdownUste = document.getElementById('dropdownUste');

  inputIngr.placeholder = dropdownIngr.classList.contains('show') ? textIngr : 'Ingrédients';
  inputAppa.placeholder = dropdownAppa.classList.contains('show') ? textAppa : 'Appareils';
  inputUste.placeholder = dropdownUste.classList.contains('show') ? textUste : 'Ustensiles';
}

/** ******************************************************************************** */
/** *******************Open dropdown and change style of buttons******************* */
/** ****************************************************************************** */
function closeAllDropdown() {
  const elements = document.getElementsByClassName('dropdown show');
  if (elements.length > 0) {
    elements[0].classList.remove('show');
  }
  modifyPlaceholders();
}

function toggleDropdown(event) {
  let content = document.getElementById(event.target.getAttribute('data-target'))
  if (content == null) {
    content = document.getElementById(event.srcElement.parentElement.getAttribute('data-target'))
  }
  const isDisplayed = content.classList.contains('show');
  closeAllDropdown();
  if (!isDisplayed) {
    content.classList.add('show');
  }
  modifyPlaceholders();
}

function openDropdown(contentId) {
  let dropdown;
  // Define each dropdown
  const dropdownIngr = document.getElementById('dropdownIngr');
  const dropdownAppa = document.getElementById('dropdownAppa');
  const dropdownUste = document.getElementById('dropdownUste');
  switch (contentId) {
    case 'contIngr':
      dropdown = dropdownIngr;
      break;
    case 'contAppa':
      dropdown = dropdownAppa;
      break;
    case 'contUste':
      dropdown = dropdownUste;
      break;
    default:
      break;
  }

  const isDisplayed = dropdown.classList.contains('show');
  if (!isDisplayed) {
    dropdown.classList.add('show');
  }
  modifyPlaceholders();
}

displayTags(recipes);

function displayTags(filteredRecipes) {
  const arrayIngr = [];
  const arrayAppa = [];
  const arrayUste = [];

  filteredRecipes.forEach((recipe) => {
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

createContent(arrayIngr, arrayAppa, arrayUste);

}

// Create list of ingredients
function createContent(arrayIngr, arrayAppa, arrayUste) {
  let links;
    // Remove all element with .card class after each keyup
  document.querySelectorAll('.dropdown__content__links').forEach((a) => {
    a.remove();
  });
  arrayIngr.forEach((ingredient) => {
    links = document.createElement('a');
    links.classList.add('dropdown__content__links');
    links.innerHTML = ingredient;
    document.getElementById('contIngr').appendChild(links);
  });
  arrayAppa.forEach((appliance) => {
    links = document.createElement('a');
    links.classList.add('dropdown__content__links');
    links.innerHTML = appliance;
    document.getElementById('contAppa').appendChild(links);
  });
  arrayUste.forEach((ustensil) => {
    links = document.createElement('a');
    links.classList.add('dropdown__content__links');
    links.innerHTML = ustensil;
    document.getElementById('contUste').appendChild(links);
  });
  eventClickLink();
}

export {modifyPlaceholders,closeAllDropdown, toggleDropdown, openDropdown, createContent, displayTags}
