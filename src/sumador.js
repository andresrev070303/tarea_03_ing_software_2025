function saludar(nombre, genero, edad, idioma) {
  if (idioma==="ES") {
  if (genero === "M") {
    if (edad < 30) {
      return "joven " + nombre;
    } else {
      return "Sr. " + nombre;
    }
  } else if (genero === "F") {
    if (edad < 30) {
      return "señorita " + nombre;
    } else {
      return "Sra. " + nombre;
    }
  } else {
    return nombre;
  }
}else if (idioma === "EN"){
  if (genero === "M") {
    if (edad < 30) {
      return  nombre;
    } else {
      return "Mr. " + nombre;
    }
  } else if (genero === "F") {
    if (edad < 30) {
      return nombre;
    } else {
      return "Mrs. " + nombre;
    }
  } else {
    return nombre;
  }
}
}
export default saludar;
