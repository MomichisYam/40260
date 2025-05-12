import { Picture } from "./PictureM.js";

let x = document.getElementById('app').innerHTML = Picture(1, "John") + Picture(2, "Jane")

export function saludar() {
  alert("x");
}

export const lista = app.querySelectorAll("img")
console.log(lista);
for (let i = 0; i < lista.length; i++) {
  //lista[i].addEventListener("click", saludar);
  lista[i].addEventListener("click", () => {
    lista[i].classList.toggle("redonda")
  });
}

