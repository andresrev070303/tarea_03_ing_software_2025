import saludar from "./sumador";
import saludarHora from "./saludarHora";

const nombre_input = document.querySelector("#nombre");
const genero_select = document.querySelector("#genero");
const edad_input = document.querySelector("#edad");
const idioma_select = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const genero = genero_select.value;
  const edad = edad_input.value;
  const idioma = idioma_select.value;

  div.innerHTML = "<p>" + saludarHora(idioma) + saludar(nombre, genero, edad, idioma) + "</p>";
});
