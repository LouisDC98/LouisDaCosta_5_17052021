import recipes from '../data/recipes.js';
import {displayRecipes} from '../DOM/domRecipes.js';
import {eventKeyupSearchBar, eventClickLink} from '../eventListener.js';

eventClickLink()
eventKeyupSearchBar();

// Define tags which are selected
const tagsIngr = document.getElementsByClassName('tag--ingredient');
const tagsAppa = document.getElementsByClassName('tag--appareil');
const tagsUste = document.getElementsByClassName('tag--ustensile');

let txtValue;
const arrayTagIngr = [];
const arrayTagAppa = [];
const arrayTagUste = [];

function launchSearch() {
  extractValues ();
  var searchParams = new SearchParams(mainSearch, arrayTagIngr, arrayTagAppa, arrayTagUste);
  console.log(searchParams);
  const filteredRecipes = research(searchParams);
  var searchServices = new SearchServices(filteredRecipes);
  console.log(searchServices);
  displayRecipes(filteredRecipes);
}

class customFunction {
  static extractTags(tagsCategory, arrayCategory) {
    for (let i = 0; i < tagsCategory.length; ++i) {
      txtValue = tagsCategory[i].textContent
      if(arrayCategory[i] !== txtValue) {
        arrayCategory.push(txtValue);  
      }
    }
  }
}

// Sanitize main input, and grab each tags that user wants
var mainSearch;
function extractValues() {
    mainSearch = searchBar.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()
    customFunction.extractTags(tagsIngr, arrayTagIngr);
    customFunction.extractTags(tagsAppa, arrayTagAppa);
    customFunction.extractTags(tagsUste, arrayTagUste);
}


function research(searchParams) {
    const filteredRecipes = [];
    recipes.forEach((element) => {
      if (element.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(element);
      }
      else if (element.description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(element);
      }
    });
    return filteredRecipes;
  }

// Catch input from user and isolate them
class SearchParams {
    constructor(mainSearch, tagIngr, tagAppa, tagUste) {
        this.main = mainSearch,
        this.ingredients = tagIngr
        this.appareils = tagAppa,
        this.ustensiles = tagUste
    }  
}

// Compare inputs with datas in recipes.js
class SearchServices {
    constructor(recipes) {
        this.recipes = recipes
    }
}

export {launchSearch}
