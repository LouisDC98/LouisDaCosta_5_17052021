const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup',researchName);

function researchName() {
    const filteredRecipe = [];
    const filter = searchBar.value.toUpperCase();
    for (i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toUpperCase().indexOf(filter) > -1) {
            filteredRecipe.push(recipes[i]);

        } else if(recipes[i].description.toUpperCase().indexOf(filter) > -1) {
            filteredRecipe.push(recipes[i]);
        }
    }
    console.log(filteredRecipe)
}