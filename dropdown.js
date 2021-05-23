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
const contApar = document.getElementById("contApar");
const contUste = document.getElementById("contUste");

// Define each dropdown
const dropdownIngr = document.getElementById("dropdownIngr");
const dropdownAppa = document.getElementById("dropdownAppa");
const dropdownUste = document.getElementById("dropdownUste");

// Define icon of each dropdown
const iconIngr = document.getElementById('iconIngr');
const iconAppa = document.getElementById('iconAppa');
const iconUste = document.getElementById('iconUste');

/***********************************************************************************/
/*********************Open content and change style of buttons*********************/
/*********************************************************************************/

iconIngr.addEventListener('click', function (){
    toggleDropdown(dropdownIngr,inputIngr, textIngr);
    modifyPlaceholder(inputIngr, textIngr);
});

iconAppa.addEventListener('click', function (){
    toggleDropdown(dropdownAppa,inputAppa, textAppa);
    modifyPlaceholder(inputAppa, textAppa);
});

iconUste.addEventListener('click', function (){
    toggleDropdown(dropdownUste, inputUste, textUste);
    modifyPlaceholder(inputUste, textUste);
});

function toggleDropdown(content, input, text) {
    const isDisplayed = content.classList.contains("show");
    closeAllDropdown();
    if(input.placeholder != text) {
    inputIngr.placeholder = 'Ingrédients';
    inputAppa.placeholder = 'Appareils';
    inputUste.placeholder = 'Ustensiles';
    }
    if(!isDisplayed){
        content.classList.add("show");
    }
}

function closeAllDropdown() {
    const elements = document.getElementsByClassName("dropdown show");
    if(elements.length > 0) {
        elements[0].classList.remove("show");
    }
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

// Define new placeholder
const textIngr = 'Recherche un ingrédient';
const textAppa = 'Recherche un appareil';
const textUste = 'Recherche un ustensile';

// Change placeholder when icon pressed
function modifyPlaceholder(input, text) {
    if(input.placeholder != text) {
        input.placeholder = text; 
    }
    else {
        inputIngr.placeholder = 'Ingrédients';
        inputAppa.placeholder = 'Appareils';
        inputUste.placeholder = 'Ustensiles';
    }
}
