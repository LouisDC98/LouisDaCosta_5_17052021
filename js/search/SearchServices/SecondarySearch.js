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
  
    static matchIngredients(searchParams, recipes) {
        const filteredRecipesIngredient = [];
        if (searchParams.ingredients.length > 0) {
            recipes.forEach((recipe) => {
                let isFind = true
                searchParams.ingredients.forEach(element => {
                    isFind &= recipe.ingredients.findIndex(ingredient => 
                        ingredient.ingredient.indexOf(element) > -1)> -1;
                });
                if (isFind) {
                    filteredRecipesIngredient.push(recipe)
                }
            });
        }
        return filteredRecipesIngredient;
    }

    static matchAppareils(searchParams, recipes) {
        const filteredRecipesAppareil = [];
        if (searchParams.appareils.length > 0) {
            recipes.forEach((recipe) => {
                let isFind = true
                searchParams.appareils.forEach(element => {
                    isFind &= recipe.appliance.findIndex(appareil => 
                        appareil.indexOf(element) > -1)> -1;
                });
                if (isFind) {
                    filteredRecipesAppareil.push(recipe)
                }
            });
        }   
        return filteredRecipesAppareil;
    }

    static matchUstensiles(searchParams, recipes) {
        const filteredRecipesUstensile = [];
        if (searchParams.ustensiles.length > 0) {
            recipes.forEach((recipe) => {
                let isFind = true
                searchParams.ustensiles.forEach(element => {
                    isFind &= recipe.ustensils.findIndex(ustensile => 
                        ustensile.indexOf(element) > -1)> -1;
                });
                if (isFind) {
                    filteredRecipesUstensile.push(recipe)
                }
            });
        }
        return filteredRecipesUstensile;
    }

}

export default SecondarySearch;
