// Define each button
const btnIngr = document.getElementById("btnIngr");
const btnApar = document.getElementById("btnApar");
const btnUste = document.getElementById("btnUste");

// Define search bar in each button
const inputIngr = document.getElementById("inputIngr");
const inputApar = document.getElementById("inputApar");
const inputUste = document.getElementById("inputUste");

// Define icon in each button
const iconIngr = document.getElementById("iconIngr");
const iconApar = document.getElementById("iconApar");
const iconUste = document.getElementById("iconUste");

// Define each list of button
const contIngr = document.getElementById("contIngr");
const contApar = document.getElementById("contApar");
const contUste = document.getElementById("contUste");


/***********************************************************************************/
/*********************Open content and change style of buttons*********************/
/*********************************************************************************/

// When iconIngr pressed launch functions openContent and grownBtn
iconIngr.addEventListener('click', function (){openContent(contIngr);});
iconIngr.addEventListener('click', function (){growBtn(btnIngr, inputIngr, iconIngr);});

// When iconAppa pressed launch functions openContent and grownBtn
iconAppa.addEventListener('click', function (){openContent(contAppa);});
iconAppa.addEventListener('click', function (){growBtn(btnAppa, inputAppa, iconAppa);});

// When iconUste pressed launch functions openContent and grownBtn
iconUste.addEventListener('click', function (){openContent(contUste);});
iconUste.addEventListener('click', function (){growBtn(btnUste, inputUste, iconUste);});

// Open content
function openContent(content) {
    if(!content.classList.contains("show")) {
        content.classList.add("show");
    }
    else if(content.classList.contains("show")) {
        content.classList.remove("show");
    }
}

// Change width of the button and input bar also rotate arrow
function growBtn(btn, input, icon) {
    if(btn.classList.contains('dropbtn--grow')) {
        btn.classList.remove('dropbtn--grow');
    }
    else if(!btn.classList.contains('dropbtn--grow')) {
        btn.classList.add('dropbtn--grow');
    }
    if(input.classList.contains('dropbtn__search--grow')) {
        input.classList.remove('dropbtn__search--grow');
    }
    else if(!input.classList.contains('dropbtn__search--grow')) {
        input.classList.add('dropbtn__search--grow');
    }
    if(icon.classList.contains('arrow-down--turn')) {
        icon.classList.remove('arrow-down--turn');
    }
    else if(!icon.classList.contains('arrow-down--turn')) {
        icon.classList.add('arrow-down--turn');
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
    let filter = input.value.toUpperCase();
    let a = content.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } 
      else {
        a[i].style.display = "none";
      }
    }
}
