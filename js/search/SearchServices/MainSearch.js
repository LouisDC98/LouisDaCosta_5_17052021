import recipes from '../../data/recipes.js';

class MainSearch {
  static research(searchParams) {
    let filteredRecipes = [];
    if (searchParams.main.length <= 2) {
      filteredRecipes = [...recipes];
      return filteredRecipes;
    }
    recipes.forEach((recipe) => {
      if (recipe.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(recipe);
      } else if (recipe.description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(searchParams.main) > -1) {
        filteredRecipes.push(recipe);
      } else if (
        recipe.ingredients.forEach((element) => {
          element.ingredient.indexOf(searchParams.main) > -1;
        })
      ) {
        filteredRecipes.push(recipe);
      }
    });
    return filteredRecipes;
  }
}

export default MainSearch;
