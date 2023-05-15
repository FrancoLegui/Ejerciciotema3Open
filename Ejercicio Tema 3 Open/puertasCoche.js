class Coche {
    constructor() {
      this.numeroDePuertas = 4;
    }
  
    incrementarPuertas() {
      this.numeroDePuertas++;
    }
  }
  
  var miCoche = new Coche();
  
  miCoche.incrementarPuertas(1);
  
  console.log("Número de puertas del coche: " + miCoche.numeroDePuertas);
  