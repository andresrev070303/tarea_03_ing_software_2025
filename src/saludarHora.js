function saludarHora(idioma) {
    const hora = new Date().getHours();
    if (idioma==="ES") {
        if (hora < 12) {
            return "Buenos días ";
          } else if (hora < 20) {
            return "Buenas tardes ";
          } else {
            return "Buenas noches ";
          }
    }
    else if (idioma === "EN"){
        if (hora < 12) {
          return "Good morning ";
        } else if (hora < 20) {
          return "Good afternoon ";
        } else {
          return "Good night ";
        }
      }
      else {
        return "Hola ";
      }
  }
  export default saludarHora;