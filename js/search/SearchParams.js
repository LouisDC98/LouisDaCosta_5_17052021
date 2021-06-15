import CustomFunction from '../CustomFunction.js';

// Catch input from user and isolate them
class SearchParams {
  constructor() {
    this.main = document.getElementById('searchBar').value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    // Define tags which are selected
    const tagsIngr = document.getElementsByClassName('tag--ingredient');
    const tagsAppa = document.getElementsByClassName('tag--appareil');
    const tagsUste = document.getElementsByClassName('tag--ustensile');
    this.ingredients = CustomFunction.extractTags(tagsIngr);
    this.appareils = CustomFunction.extractTags(tagsAppa);
    this.ustensiles = CustomFunction.extractTags(tagsUste);
  }
}

export default SearchParams;
