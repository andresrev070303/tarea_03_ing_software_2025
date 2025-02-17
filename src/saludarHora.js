function saludarHora() {
    const hora = new Date().getHours();
    if (hora < 12) {
      return "Buenos días ";
    } else if (hora < 20) {
      return "Buenas tardes ";
    } else {
      return "Buenas noches ";
    }
  }
  export default saludarHora;