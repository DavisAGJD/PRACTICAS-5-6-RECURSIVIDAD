// TorresDeHanoi.js
import Varilla from './Varilla.js';

class TorresDeHanoi {
    constructor(numDiscos) {
        this.numDiscos = numDiscos;
        this.origen = new Varilla('Origen');
        this.destino = new Varilla('Destino');
        this.auxiliar = new Varilla('Auxiliar');
        this.movimientos = [];
        
        // Apilar los discos en la varilla de origen
        for (let i = numDiscos; i > 0; i--) {
            this.origen.apilar(i);
        }
    }

    // Método recursivo para resolver las Torres de Hanói
    resolverHanoi(numDiscos, origen, destino, auxiliar) {
        if (numDiscos === 1) {
            this.moverDisco(origen, destino);
            return;
        }

        // Mueve n-1 discos desde origen a auxiliar
        this.resolverHanoi(numDiscos - 1, origen, auxiliar, destino);

        // Mueve el disco restante a la varilla destino
        this.moverDisco(origen, destino);

        // Mueve los n-1 discos desde auxiliar a destino
        this.resolverHanoi(numDiscos - 1, auxiliar, destino, origen);
    }

    // Método para registrar el movimiento de un disco
    moverDisco(origen, destino) {
        const disco = origen.desapilar();
        destino.apilar(disco);
        this.movimientos.push(`Mover disco ${disco} de ${origen.nombre} a ${destino.nombre}`);
        this.mostrarMovimientos(); // Mostrar el movimiento en la interfaz
    }

    // Método para mostrar los movimientos en la interfaz
    mostrarMovimientos() {
        const movimientosDiv = document.getElementById('movimientos');
        movimientosDiv.innerHTML = this.movimientos.map((mov, index) => `<p>${index + 1}: ${mov}</p>`).join('');
    }
}

export default TorresDeHanoi;
