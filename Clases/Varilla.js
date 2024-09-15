class Varilla {
    constructor(nombre) {
        this.nombre = nombre;
        this.discos = [];
    }

    apilar(disco) {
        this.discos.push(disco);
    }

    desapilar() {
        return this.discos.pop();
    }

    verTope() {
        return this.discos[this.discos.length - 1];
    }

    estaVacia() {
        return this.discos.length === 0;
    }
}

export default Varilla;