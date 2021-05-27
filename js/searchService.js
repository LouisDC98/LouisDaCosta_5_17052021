import DOMService from './domService.js';
import recipes from './recipes.js';

class SearchService {
  // Reserch match between input and content
  static filterFunction(input, content) {
    const filter = input.value.toUpperCase();
    if (filter.length > 0) {
      new DOMService().closeAllDropdown();
      new DOMService().openDropdown(content.id);
    }

    const a = content.getElementsByTagName('a');
    for (let i = 0; i < a.length; ++i) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = '';
      } else {
        a[i].style.display = 'none';
      }
    }
  }

  // Research match between input in search bar and name/description of each recipe of recipes array
  static research(filter) {
    const sanitizeFilter = filter.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const filteredRecipes = [];
    recipes.forEach((element) => {
      if (element.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(sanitizeFilter) > -1) {
        filteredRecipes.push(element);
      } else if (element.description.toUpperCase().indexOf(filter) > -1) {
        filteredRecipes.push(element);
      }
    });
    console.log(filteredRecipes);
    return filteredRecipes;
  }
}

export default SearchService;
