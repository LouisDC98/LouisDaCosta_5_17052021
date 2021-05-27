class DOMService {
  constructor() {
    // Define search bar in each button
    this.inputIngr = document.getElementById('inputIngr');
    this.inputAppa = document.getElementById('inputAppa');
    this.inputUste = document.getElementById('inputUste');

    // Define each list of button
    this.contIngr = document.getElementById('contIngr');
    this.contAppa = document.getElementById('contAppa');
    this.contUste = document.getElementById('contUste');

    // Define icon of each dropdown
    this.iconIngr = document.getElementById('iconIngr');
    this.iconAppa = document.getElementById('iconAppa');
    this.iconUste = document.getElementById('iconUste');

    this.searchBar = document.getElementById('searchBar');

    // Define each dropdown
    this.dropdownIngr = document.getElementById('dropdownIngr');
    this.dropdownAppa = document.getElementById('dropdownAppa');
    this.dropdownUste = document.getElementById('dropdownUste');
  }

  // Change placeholder when icon pressed
  modifyPlaceholders() {
    // Define new placeholder
    const textIngr = 'Recherche un ingrédient';
    const textAppa = 'Recherche un appareil';
    const textUste = 'Recherche un ustensile';

    this.inputIngr.placeholder = this.dropdownIngr.classList.contains('show') ? textIngr : 'Ingrédients';
    this.inputAppa.placeholder = this.dropdownAppa.classList.contains('show') ? textAppa : 'Appareils';
    this.inputUste.placeholder = this.dropdownUste.classList.contains('show') ? textUste : 'Ustensiles';
  }

  /** ******************************************************************************** */
  /** *******************Open content and change style of buttons******************** */
  /** ****************************************************************************** */
  closeAllDropdown() {
    const elements = document.getElementsByClassName('dropdown show');
    if (elements.length > 0) {
      elements[0].classList.remove('show');
    }
    this.modifyPlaceholders();
  }

  toggleDropdown(content) {
    const isDisplayed = content.classList.contains('show');
    this.closeAllDropdown();
    if (!isDisplayed) {
      content.classList.add('show');
    }
    this.modifyPlaceholders();
  }

  openDropdown(contentId) {
    let dropdown;
    switch (contentId) {
      case 'contIngr':
        dropdown = this.dropdownIngr;
        break;
      case 'contAppa':
        dropdown = this.dropdownAppa;
        break;
      case 'contUste':
        dropdown = this.dropdownUste;
        break;
      default:
        break;
    }

    const isDisplayed = dropdown.classList.contains('show');
    if (!isDisplayed) {
      dropdown.classList.add('show');
    }
    this.modifyPlaceholders();
  }

  //  Create a tag with text of the link pressed
  static addTag(name, categorie) {
    const div = document.createElement('div');
    div.classList.add('tag');
    div.setAttribute('id', name);

    let classColor;
    switch (categorie) {
      case 'contIngr':
        classColor = 'tag--ingredient';
        break;
      case 'contAppa':
        classColor = 'tag--appareil';
        break;
      case 'contUste':
        classColor = 'tag--ustensile';
        break;
      default:
        break;
    }
    div.classList.add(classColor);

    const title = document.createElement('p');
    title.classList.add('tag__name');
    title.innerHTML = name;

    const btnClose = document.createElement('button');
    btnClose.classList.add('tag__close');

    const icon = document.createElement('i');
    icon.classList.add('far');
    icon.classList.add('fa-times-circle');
    icon.classList.add('tag__icon');

    document.getElementById('sectionTag').appendChild(div);
    div.appendChild(title);
    div.appendChild(btnClose);
    btnClose.appendChild(icon);

    btnClose.addEventListener('click', () => {
      DOMService.removeTag(name);
    });
  }

  // Remove tag
  static removeTag(name) {
    document.getElementById(name).remove();
  }

  // Create element figure with all element of a recipe
  static createElementRecipe(recipe) {
    const figure = document.createElement('figure');
    figure.classList.add('card');

    const figureImg = document.createElement('img');
    figureImg.classList.add('card__img');
    figureImg.src = './public/img/steak.jpg';

    const figcaption = document.createElement('figcaption');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const name = document.createElement('h1');
    name.classList.add('title__name');
    name.innerHTML = recipe.name;

    const titleTime = document.createElement('div');
    titleTime.classList.add('title__time');

    const iconTime = document.createElement('i');
    iconTime.classList.add('far');
    iconTime.classList.add('fa-clock');

    const durationTime = document.createElement('div');
    durationTime.classList.add('title__time__duration');
    durationTime.innerHTML = `${recipe.time} min`;

    const cardSecondary = document.createElement('div');
    cardSecondary.classList.add('card__secondary');

    const Ulist = document.createElement('ul');
    Ulist.classList.add('card__secondary__ingredient');

    // Add a li for each ingredient, and quantity and unit only if necessary
    recipe.ingredients.forEach((ingredient) => {
      const list = document.createElement('li');
      list.innerHTML = ingredient.ingredient;
      if (ingredient.quantity) {
        list.innerHTML += `: ${ingredient.quantity}`;
        if (ingredient.unit) {
          list.innerHTML += ` ${ingredient.unit}`;
        }
      }
      Ulist.appendChild(list);
    });

    const description = document.createElement('p');
    description.classList.add('card__secondary__description');
    description.innerHTML = recipe.description;

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

  // Create list of ingredients
  static createContent(arrayIngr, arrayAppa, arrayUste) {
    let links;
    arrayIngr.forEach((ingredient) => {
      links = document.createElement('a');
      links.classList.add('dropdown__content__links');
      links.innerHTML = ingredient;
      document.getElementById('contIngr').appendChild(links);
    });
    arrayAppa.forEach((appliance) => {
      links = document.createElement('a');
      links.classList.add('dropdown__content__links');
      links.innerHTML = appliance;
      document.getElementById('contAppa').appendChild(links);
    });
    arrayUste.forEach((ustensil) => {
      links = document.createElement('a');
      links.classList.add('dropdown__content__links');
      links.innerHTML = ustensil;
      document.getElementById('contUste').appendChild(links);
    });
  }

  static displayRecipes(recipes) {
    // Remove all element with .card class after each keyup
    document.querySelectorAll('.card').forEach((a) => {
      a.remove();
    });

    recipes.forEach((recipe) => {
      DOMService.createElementRecipe(recipe);
    });
  }
}

export default DOMService;
