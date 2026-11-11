//1.- Busca los elementos del DOM
const tarjeta = document.querySelector("#tarjeta");
const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const rojo = document.querySelector("#rojo");
const restablecer = document.querySelector("#restablecer");
//2.- Agrega un evento a cada botón
azul.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "blue";
});

verde.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "green";
});

rojo.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "red";
});

restablecer.addEventListener("click", () => {
    tarjeta.style.backgroundColor = "";   // vuelve al color original (blanco)
});