const pantalla = document.getElementById("resultado");
const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");
const boton3 = document.getElementById("boton-3");
const boton4 = document.getElementById("boton-4");
const boton5 = document.getElementById("boton-5");
const boton6 = document.getElementById("boton-6");
const boton7 = document.getElementById("boton-7");
const boton8 = document.getElementById("boton-8");
const boton9 = document.getElementById("boton-9");
const boton0 = document.getElementById("boton-0");
const botonC = document.getElementById("boton-c");
const botonPunto = document.getElementById("boton-punto");
const botonSuma = document.getElementById("boton-suma");
const botonResta = document.getElementById("boton-resta");
const botonMult = document.getElementById("boton-mult");
const botonDiv = document.getElementById("boton-div");
const botonIgual = document.getElementById("boton-igual");

boton1.addEventListener("click", () => {
    pantalla.value += "1";
})

boton2.addEventListener("click", () => {
    pantalla.value += "2";
})

boton3.addEventListener("click", () => {
    pantalla.value += "3";
})

boton4.addEventListener("click", () => {
    pantalla.value += "4";
})  

boton5.addEventListener("click", () => {    
    pantalla.value += "5";
})  

boton6.addEventListener("click", () => {
    pantalla.value += "6";
})

boton7.addEventListener("click", () => {
    pantalla.value += "7";
})  

boton8.addEventListener("click", () => {
    pantalla.value += "8";
})  

boton9.addEventListener("click", () => {    
    pantalla.value += "9";
})  

boton0.addEventListener("click", () => {   
    if (pantalla.value == "0") {
        pantalla.value = "";
    } else {
        pantalla.value += "0";
    }
})  

botonC.addEventListener("click", () => {
    pantalla.value = "";
})

botonPunto.addEventListener("click", () => {
    if (pantalla.value == "") {
        pantalla.value = "0";
    } else {
        pantalla.value += ".";
    } 
})

botonSuma.addEventListener("click", () => {
    if (pantalla.value != "") {
        pantalla.value += "+";
    }
})

botonResta.addEventListener("click", () => {
    if (pantalla.value != "") {
        pantalla.value += "-";
    }
})  

botonMult.addEventListener("click", () => {    
    if (pantalla.value != "") {
        pantalla.value += "x";
    }
})  

botonDiv.addEventListener("click", () => {
    if (pantalla.value != "") {
        pantalla.value += "/";
    }
})  

botonIgual.addEventListener("click", () => {
    if (pantalla.value == "") {
        pantalla.value = "";
    } else {
        pantalla.value = eval(pantalla.value);
    }
})

