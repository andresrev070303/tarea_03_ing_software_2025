function saludar(nombre, genero) {
  if (genero === "M") {
    return "Sr. " + nombre;
  } else if (genero === "F") {
    return "Sra. " + nombre;
  } else {
    return nombre;
  }
}

export default saludar;
