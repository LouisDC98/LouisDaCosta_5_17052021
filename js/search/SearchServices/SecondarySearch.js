import recipes from '../../data/recipes.js';

class SecondarySearch {
    
    static tagsMatch(searchParams) {
        const filteredRecipesSecondary = [];

        SecondarySearch.matchIngredients(searchParams).forEach(element => {
            filteredRecipesSecondary.push(element);
        });
        SecondarySearch.matchAppareils(searchParams).forEach(element => {
            filteredRecipesSecondary.push(element);
        });
        SecondarySearch.matchUstensiles(searchParams).forEach(element => {
            filteredRecipesSecondary.push(element);
        });
        console.log(filteredRecipesSecondary)
        
    return filteredRecipesSecondary;
    }
  
    static matchIngredients(searchParams) {
        const filteredRecipesIngredient = [];
        if (searchParams.ingredients.length > 0) {
            recipes.forEach((recipe) => {
                recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.indexOf(searchParams.ingredients) > -1) {
                        filteredRecipesIngredient.push(recipe)
                    }
                });
            });
        }
       
        return filteredRecipesIngredient;
    }

    static matchAppareils(searchParams) {
        const filteredRecipesAppareil = [];
        if (searchParams.appareils.length > 0) {
            recipes.forEach((recipe) => {
                recipe.appliance.forEach(appareil => {
                    if (appareil.indexOf(searchParams.appareils) > -1) {
                        filteredRecipesAppareil.push(recipe)
                    }
                });
            });
        }   
        return filteredRecipesAppareil;
    }

    static matchUstensiles(searchParams) {
        const filteredRecipesUstensile = [];
        if (searchParams.ustensiles.length > 0) {
            recipes.forEach((recipe) => {
                recipe.ustensils.forEach(ustensile => {
                    if (ustensile.indexOf(searchParams.ustensiles) > -1) {
                        filteredRecipesUstensile.push(recipe)
                    }
                });
            });
        }
        return filteredRecipesUstensile;
    }

}

export default SecondarySearch;