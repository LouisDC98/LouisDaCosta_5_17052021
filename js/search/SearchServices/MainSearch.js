import recipes from '../../data/recipes.js';

class MainSearch {
  static research(searchParams) {
    const filteredRecipes = [];
    if (searchParams.main.length <= 2) {
      return recipes;
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

  static tagsMatch(searchParams, recipes) {
    const filteredRecipesSecondary = [];
    let filteredRecipesByIngredients = [];
    let filteredRecipesByAppareils = [];
    let filteredRecipesByUstensiles = [];
    const TagIngredient = document.getElementsByClassName('tag--ingredient');
    const TagAppareil = document.getElementsByClassName('tag--appareil');
    const TagUstensile = document.getElementsByClassName('tag--ustensile');

    const [ingr, appa, uste] = MainSearch.matchTags(searchParams, recipes);
    filteredRecipesByIngredients = ingr;
    filteredRecipesByAppareils = appa;
    filteredRecipesByUstensiles = uste;

    const union = [...new Set(
      [...filteredRecipesByIngredients,
        ...filteredRecipesByAppareils,
        ...filteredRecipesByUstensiles],
    )];

    // For each element of the set looks if his id match with the id of another element
    union.forEach((element) => {
      let foundInAppareils = 1;
      let foundInIngredients = 1;
      let foundInUstensiles = 1;
      if (TagIngredient.length !== 0) {
        foundInIngredients = filteredRecipesByIngredients.findIndex(
          (elem) => elem.id === element.id,
        );
      }
      if (TagAppareil.length !== 0) {
        foundInAppareils = filteredRecipesByAppareils.findIndex(
          (elem) => elem.id === element.id,
        );
      }

      if (TagUstensile.length !== 0) {
        foundInUstensiles = filteredRecipesByUstensiles.findIndex(
          (elem) => elem.id === element.id,
        );
      }

      if (foundInIngredients !== -1 && foundInAppareils !== -1 && foundInUstensiles !== -1) {
        filteredRecipesSecondary.push(element);
      }
    });
    return filteredRecipesSecondary;
  }

  static matchTags(searchParams, recipes) {
    const filteredTag = [];

    const filteredRecipesIngredient = [];
    const filteredRecipesAppareil = [];
    const filteredRecipesUstensile = [];

    if (searchParams.ingredients.length > 0
      || searchParams.appareils.length > 0
      || searchParams.ustensiles.length > 0) {
      recipes.forEach((recipe) => {
        let isFoundIngr = true;
        searchParams.ingredients.forEach((element) => {
          isFoundIngr &= recipe.ingredients.findIndex(
            (ingredient) => ingredient.ingredient.indexOf(element) > -1,
          ) > -1;
        });
        if (isFoundIngr) {
          filteredRecipesIngredient.push(recipe);
        }

        let isFoundAppa = true;
        searchParams.appareils.forEach((element) => {
          isFoundAppa &= recipe.appliance.findIndex(
            (appareil) => appareil.indexOf(element) > -1,
          )
             > -1;
        });
        if (isFoundAppa) {
          filteredRecipesAppareil.push(recipe);
        }

        let isFoundUste = true;
        searchParams.ustensiles.forEach((element) => {
          isFoundUste &= recipe.ustensils.findIndex(
            (ustensile) => ustensile.indexOf(element) > -1,
          )
             > -1;
        });
        if (isFoundUste) {
          filteredRecipesUstensile.push(recipe);
        }
      });
    }

    filteredTag.push(filteredRecipesIngredient);
    filteredTag.push(filteredRecipesAppareil);
    filteredTag.push(filteredRecipesUstensile);
    return filteredTag;
  }
}

export default MainSearch;
