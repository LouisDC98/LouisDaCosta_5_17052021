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

/***********************************************************************************/
/*********************Open content and change style of buttons*********************/
/*********************************************************************************/

btnIngr.addEventListener('click', function (){
    toggleDropdown(dropdownIngr);
});

btnAppa.addEventListener('click', function (){
    toggleDropdown(dropdownAppa);
});

btnUste.addEventListener('click', function (){
    toggleDropdown(dropdownUste);
});

function toggleDropdown(content) {
    const isDisplayed = content.classList.contains("show");
    closeAllDropdown();
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
