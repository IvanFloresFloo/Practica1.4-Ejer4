function calcularLongitudes() {
    const stringsInput = document.getElementById("stringsInput").value;
    const stringsArray = stringsInput.split(",");
    
    const longitudesArray = stringsArray.map(function(string) {
      return string.length;
    });
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Longitudes: " + longitudesArray.join(", ");
  }
  