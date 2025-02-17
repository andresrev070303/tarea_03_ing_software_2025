import saludar from "./sumador";
import saludarHora from "./saludarHora";

const nombre_input = document.querySelector("#nombre");
const genero_select = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const genero = genero_select.value;

  div.innerHTML = "<p>" + saludarHora() + saludar(nombre, genero) + "</p>";
});
