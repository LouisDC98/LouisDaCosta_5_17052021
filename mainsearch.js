const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', research);

// Research match between input in search bar and name/description of each recipe of recipes array 
function research() {
    const filteredRecipes = [];
    const filter = searchBar.value.toUpperCase();
    for (i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toUpperCase().indexOf(filter) > -1) {
            filteredRecipes.push(recipes[i]);

        }
        else if (recipes[i].description.toUpperCase().indexOf(filter) > -1) {
            filteredRecipes.push(recipes[i]);
        }
    }
    console.log(filteredRecipes)

    // Remova all element with .card class after each keyup
    document.querySelectorAll('.card').forEach(function (a) {
        a.remove()
    })

    filteredRecipes.forEach(recipe => {
        createElement(recipe);
    });
}

recipes.forEach(recipe => {
    createElement(recipe);
});

// Create element figure with all element of a recipe
function createElement(recipe) {
    const figure = document.createElement('figure');
    figure.classList.add('card');

    const figureImg = document.createElement('img');
    figureImg.classList.add('card__img');
    figureImg.src = "./steak.jpg";

    const figcaption = document.createElement('figcaption');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const name = document.createElement('h1');
    name.classList.add('title__name');
    name.innerHTML = recipe['name'];

    const titleTime = document.createElement('div');
    titleTime.classList.add('title__time');

    const iconTime = document.createElement('i');
    iconTime.classList.add('far');
    iconTime.classList.add('fa-clock');

    const durationTime = document.createElement('div');
    durationTime.classList.add('title__time__duration');
    durationTime.innerHTML = recipe['time'] + ' min';

    const cardSecondary = document.createElement('div');
    cardSecondary.classList.add('card__secondary');

    const Ulist = document.createElement('ul');
    Ulist.classList.add('card__secondary__ingredient');

    // Add a li for each ingredient, and quantity and unit only if necessary
    recipe['ingredients'].forEach(ingredient => {
        const list = document.createElement('li');
        list.innerHTML = ingredient['ingredient'];
        if (ingredient['quantity']) {
            list.innerHTML += ': ' + ingredient['quantity'];
            if (ingredient['unit']) {
                list.innerHTML += ' ' + ingredient['unit'];
            }
        }
        Ulist.appendChild(list);
    });
    const description = document.createElement('p');
    description.classList.add('card__secondary__description');
    description.innerHTML = recipe['description'];

    // Add all elements in each others to build the recipe element
    figure.appendChild(figureImg);
    figure.appendChild(figcaption);
    figcaption.appendChild(titleDiv);
    titleDiv.appendChild(name);
    titleDiv.appendChild(titleTime);
    titleTime.appendChild(iconTime);
    titleTime.appendChild(durationTime);
    figcaption.appendChild(cardSecondary);
    cardSecondary.appendChild(Ulist);
    cardSecondary.appendChild(description);

    // Add recipe element in article
    document.querySelector('article').appendChild(figure);
}
