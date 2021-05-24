// Define each button
const btnIngr = document.getElementById("btnIngr");
const btnAppa = document.getElementById("btnAppa");
const btnUste = document.getElementById("btnUste");

// Define search bar in each button
const inputIngr = document.getElementById("inputIngr");
const inputAppa = document.getElementById("inputAppa");
const inputUste = document.getElementById("inputUste");

// Define each list of button
const contIngr = document.getElementById("contIngr");
const contAppa = document.getElementById("contAppa");
const contUste = document.getElementById("contUste");

// Define each dropdown
const dropdownIngr = document.getElementById("dropdownIngr");
const dropdownAppa = document.getElementById("dropdownAppa");
const dropdownUste = document.getElementById("dropdownUste");

// Define icon of each dropdown
const iconIngr = document.getElementById('iconIngr');
const iconAppa = document.getElementById('iconAppa');
const iconUste = document.getElementById('iconUste');

// Define new placeholder
const textIngr = 'Recherche un ingrédient';
const textAppa = 'Recherche un appareil';
const textUste = 'Recherche un ustensile';

/***********************************************************************************/
/*********************Open content and change style of buttons*********************/
/*********************************************************************************/

iconIngr.addEventListener('click', function (){
    toggleDropdown(dropdownIngr);
});

iconAppa.addEventListener('click', function (){
    toggleDropdown(dropdownAppa);
});

iconUste.addEventListener('click', function (){
    toggleDropdown(dropdownUste);
});

function toggleDropdown(content) {
    const isDisplayed = content.classList.contains("show");
    closeAllDropdown();
    if(!isDisplayed){
        content.classList.add("show");
    }
    modifyPlaceholders();
}

function closeAllDropdown() {
    const elements = document.getElementsByClassName("dropdown show");
    if(elements.length > 0) {
        elements[0].classList.remove("show");
    }
    modifyPlaceholders();
}

function openDropdown(contentId) {
    let dropdown;
    switch (contentId) {
        case 'contIngr':
            dropdown = dropdownIngr;
            break;
        case 'contAppa':
            dropdown = dropdownAppa;
            break;
        case 'contUste':
            dropdown = dropdownUste;
            break;
        default:
            break;
    }

    const isDisplayed = dropdown.classList.contains("show");
    if(!isDisplayed){
        dropdown.classList.add("show");
    }
    modifyPlaceholders();
}

/***********************************************************************************/
/****************************Make a research in content****************************/
/*********************************************************************************/

inputIngr.addEventListener('keyup', function (){filterFunction(inputIngr, contIngr);});
inputAppa.addEventListener('keyup', function (){filterFunction(inputAppa, contAppa);});
inputUste.addEventListener('keyup', function (){filterFunction(inputUste, contUste);});

// Reserch match between input and content
function filterFunction(input, content) {
    const filter = input.value.toUpperCase();
    if(filter.length > 0) { 
        openDropdown(content.id)
    }
    const a = content.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } 
      else {
        a[i].style.display = "none";
      }
    }
}

// Change placeholder when icon pressed
function modifyPlaceholders() {
    inputIngr.placeholder = dropdownIngr.classList.contains("show") ? textIngr :'Ingrédients';
    inputAppa.placeholder = dropdownAppa.classList.contains("show") ? textAppa :'Appareils';
    inputUste.placeholder = dropdownUste.classList.contains("show") ? textUste :'Ustensiles';
}

//  Create a tag with text of the link pressed
function createTag(name, categorie) {
    const div = document.createElement('div');
    div.classList.add('tag');
    div.setAttribute('id', name);

    let classColor;
    switch (categorie) {
        case 'contIngr':
            classColor = "tag--ingredient"
            break;
        case 'contAppa':
            classColor = "tag--appareil"
            break;
        case 'contUste':
            classColor = "tag--ustensile"
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

    btnClose.addEventListener('click', function(){
        removeTag(name)
    });
}

// Remove tag
function closeTag(name) {
    document.getElementById(name).remove()
}

