class SecondarySearch {
    
    static tagsMatch(searchParams, recipes) {
        const filteredRecipesSecondary = [];
        let filteredRecipesByIngredients= [];
        let filteredRecipesByAppareils = [];
        let filteredRecipesByUstensiles = [];
        const TagIngredient = document.getElementsByClassName('tag--ingredient')
        const TagAppareil = document.getElementsByClassName('tag--appareil')
        const TagUstensile = document.getElementsByClassName('tag--ustensile')

        if (TagIngredient.length != 0) {
            filteredRecipesByIngredients = SecondarySearch.matchIngredients(searchParams, recipes);
        }
        if (TagAppareil.length != 0) {
            filteredRecipesByAppareils = SecondarySearch.matchAppareils(searchParams, recipes);
        }

        if (TagUstensile.length != 0) {
            filteredRecipesByUstensiles = SecondarySearch.matchUstensiles(searchParams, recipes);
        }

        const union = [...new Set([...filteredRecipesByIngredients, ...filteredRecipesByAppareils, ...filteredRecipesByUstensiles])]

        // For each element of the set looks if his id match with the id of another element
        union.forEach(element => {
            let foundInAppareils = 1;
            let foundInIngredients = 1;
            let foundInUstensiles = 1;

            if (TagIngredient.length != 0) {
                foundInIngredients = filteredRecipesByIngredients.findIndex(elem => elem.id === element.id);            
            }
            if (TagAppareil.length != 0) {
                foundInAppareils = filteredRecipesByAppareils.findIndex(elem => elem.id === element.id);
            }
    
            if (TagUstensile.length != 0) {
                foundInUstensiles = filteredRecipesByUstensiles.findIndex(elem => elem.id === element.id);
            }

            if( foundInIngredients != -1 && foundInAppareils != -1 && foundInUstensiles != -1){
                filteredRecipesSecondary.push(element)
            }
       
        })
        return filteredRecipesSecondary;
    }
  
    // If at least one tag ingredient is selected research in each recipe if each ingredient match with the tag
    static matchIngredients(searchParams, recipes) {
        const filteredRecipesIngredient = [];
        if (searchParams.ingredients.length > 0) {
            recipes.forEach((recipe) => {
                let isFound = true
                searchParams.ingredients.forEach(element => {
                    isFound &= recipe.ingredients.findIndex(ingredient => 
                        ingredient.ingredient.indexOf(element) > -1)> -1;
                });
                if (isFound) {
                    filteredRecipesIngredient.push(recipe)
                }
            });
        }
        return filteredRecipesIngredient;
    }
    // If at least one tag appliance is selected research in each recipe if each appliance match with the tag
    static matchAppareils(searchParams, recipes) {
        const filteredRecipesAppareil = [];
        if (searchParams.appareils.length > 0) {
            recipes.forEach((recipe) => {
                let isFound = true
                searchParams.appareils.forEach(element => {
                    isFound &= recipe.appliance.findIndex(appareil => 
                        appareil.indexOf(element) > -1)> -1;
                });
                if (isFound) {
                    filteredRecipesAppareil.push(recipe)
                }
            });
        }   
        return filteredRecipesAppareil;
    }
    // If at least one tag ustensil is selected research in each recipe if each ustensil match with the tag
    static matchUstensiles(searchParams, recipes) {
        const filteredRecipesUstensile = [];
        if (searchParams.ustensiles.length > 0) {
            recipes.forEach((recipe) => {
                let isFound = true
                searchParams.ustensiles.forEach(element => {
                    isFound &= recipe.ustensils.findIndex(ustensile => 
                        ustensile.indexOf(element) > -1)> -1;
                });
                if (isFound) {
                    filteredRecipesUstensile.push(recipe)
                }
            });
        }
        return filteredRecipesUstensile;
    }

}

export default SecondarySearch;
