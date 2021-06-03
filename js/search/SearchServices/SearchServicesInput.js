import recipes from '../../data/recipes.js';

class SearchServicesInput {
  static research(searchParams) {
    const filteredRecipes = [];
    recipes.forEach((element) => {
      if (element.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(element);
      } else if (element.description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(element);
      }
    });
    return filteredRecipes;
  }
}

export { SearchServicesInput };
