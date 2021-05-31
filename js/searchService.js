import DOMService from './domService.js';
import recipes from './recipes.js';

class SearchService {
  // Research match between input and tag content
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
  static research(searchParams) {
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
}

export default SearchService;
