import recipes from '../../data/recipes.js';

class SecondarySearch {
    
    static tagsMatch(searchParams) {
        var filteredRecipesSecondary = [];
        const TagIngredient = document.getElementsByClassName('tag--ingredient')
        const TagAppareil = document.getElementsByClassName('tag--appareil')
        // const TagUstensile = document.getElementsByClassName('tag--ustensile')

        if (TagIngredient.length === 0 || TagAppareil.length === 0) {
            SecondarySearch.matchIngredients(searchParams).forEach(element => {
                filteredRecipesSecondary.push(element);
            });
            SecondarySearch.matchAppareils(searchParams).forEach(element => {
                filteredRecipesSecondary.push(element);
            });
            // SecondarySearch.matchUstensiles(searchParams).forEach(element => {
            //     filteredRecipesSecondary.push(element);
            // });
        }

        else {
            filteredRecipesSecondary = SecondarySearch.matchIngredients(searchParams).filter(x => SecondarySearch.matchAppareils(searchParams).includes(x));
            // filteredRecipesSecondary = SecondarySearch.matchIngredients(searchParams).filter(x => SecondarySearch.matchUstensiles(searchParams).includes(x));
            // filteredRecipesSecondary = SecondarySearch.matchUstensiles(searchParams).filter(x => SecondarySearch.matchAppareils(searchParams).includes(x));
        }
        
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
