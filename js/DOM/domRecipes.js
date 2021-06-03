import recipes from '../data/recipes.js';
displayRecipes(recipes);
// Define search bar in each button
const inputIngr = document.getElementById('inputIngr');
const inputAppa = document.getElementById('inputAppa');
const inputUste = document.getElementById('inputUste');

// Define each list of button
const contIngr = document.getElementById('contIngr');
const contAppa = document.getElementById('contAppa');
const contUste = document.getElementById('contUste');

// Define icon of each dropdown
const iconIngr = document.getElementById('iconIngr');
const iconAppa = document.getElementById('iconAppa');
const iconUste = document.getElementById('iconUste');

const searchBar = document.getElementById('searchBar');

// Define each dropdown
const dropdownIngr = document.getElementById('dropdownIngr');
const dropdownAppa = document.getElementById('dropdownAppa');
const dropdownUste = document.getElementById('dropdownUste');

/** ******************************************************************************** */
/** ******************************Create card recipe******************************* */
/** ****************************************************************************** */
// Create element figure with all element of a recipe
function createElementRecipe(recipe) {
  const figure = document.createElement('figure');
  figure.classList.add('card');

  const figureImg = document.createElement('img');
  figureImg.classList.add('card__img');
  figureImg.src = './public/img/steak.jpg';

  const figcaption = document.createElement('figcaption');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');

  const name = document.createElement('h1');
  name.classList.add('title__name');
  name.innerHTML = recipe.name;

  const titleTime = document.createElement('div');
  titleTime.classList.add('title__time');

  const iconTime = document.createElement('i');
  iconTime.classList.add('far');
  iconTime.classList.add('fa-clock');

  const durationTime = document.createElement('div');
  durationTime.classList.add('title__time__duration');
  durationTime.innerHTML = `${recipe.time} min`;

  const cardSecondary = document.createElement('div');
  cardSecondary.classList.add('card__secondary');

  const Ulist = document.createElement('ul');
  Ulist.classList.add('card__secondary__ingredient');

  // Add a li for each ingredient, and quantity and unit only if necessary
  recipe.ingredients.forEach((ingredient) => {
    const list = document.createElement('li');
    list.innerHTML = ingredient.ingredient;
    if (ingredient.quantity) {
      list.innerHTML += `: ${ingredient.quantity}`;
      if (ingredient.unit) {
        list.innerHTML += ` ${ingredient.unit}`;
      }
    }
    Ulist.appendChild(list);
  });

  const description = document.createElement('p');
  description.classList.add('card__secondary__description');
  description.innerHTML = recipe.description;

  // Add all elements in each others to build the recipe element
  figure.appendChild(figureImg);
  figure.appendChild(figcaption);
  figcaption.appendChild(titleDiv);
  titleDiv.appendChild(name);
  titleDiv.appendChild(titleTime);
  titleTime.appendChild(iconTime);
  titleTime.appendChild(durationTime);
  figcaption.appendChild(cardSecondary);
  cardSecondary.appendChild(Ulist);
  cardSecondary.appendChild(description);

  // Add recipe element in article
  document.querySelector('article').appendChild(figure);
}

function displayRecipes(recipes) {
  // Remove all element with .card class after each keyup
  document.querySelectorAll('.card').forEach((a) => {
    a.remove();
  });

  recipes.forEach((recipe) => {
    createElementRecipe(recipe);
  });
}

export {displayRecipes}
