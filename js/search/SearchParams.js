import { customFunction } from '../customClass.js';

// Catch input from user and isolate them
class SearchParams {
  constructor() {
    this.main = searchBar.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    // Define tags which are selected
    const tagsIngr = document.getElementsByClassName('tag--ingredient');
    const tagsAppa = document.getElementsByClassName('tag--appareil');
    const tagsUste = document.getElementsByClassName('tag--ustensile');
    this.ingredients = customFunction.extractTags(tagsIngr);
    this.appareils = customFunction.extractTags(tagsAppa);
    this.ustensiles = customFunction.extractTags(tagsUste);
  }
}

export { SearchParams };
