class Cambio {
    constructor() {
        this.denominaciones = [
            { nombre: '100 pesos', valor: 10000 },
            { nombre: '50 pesos', valor: 5000 },
            { nombre: '20 pesos', valor: 2000 },
            { nombre: '10 pesos', valor: 1000 },
            { nombre: '5 pesos', valor: 500 },
            { nombre: '2 pesos', valor: 200 },
            { nombre: '1 peso', valor: 100 },
            { nombre: '50 centavos', valor: 50 },
            { nombre: '20 centavos', valor: 20 },
            { nombre: '1 centavo', valor: 1 },
        ]
    }

    calcularCambio(cambio, index = 0, resultado = []) {
        if (cambio === 0 || index >= this.denominaciones.length) {
            return resultado;
        }

        const { nombre, valor } = this.denominaciones[index];
        const cantidadMonedas = Math.floor(cambio / valor);
        resultado.push({ nombre, cantidad: cantidadMonedas });
        return this.calcularCambio(cambio % valor, index + 1, resultado);
    }

    darCambio(resultado) {
        let mensaje = 'El cambio debe entregarse de la siguiente manera:\n';
        resultado.forEach((moneda) => {
            if (moneda.cantidad > 0) {
                // Verificamos si es una denominación de billete
                if (moneda.nombre === '100 pesos' || moneda.nombre === '50 pesos' || moneda.nombre === '20 pesos') {
                    mensaje += `▪ ${moneda.cantidad} billete(s) de ${moneda.nombre}\n`;
                } else {
                    mensaje += `▪ ${moneda.cantidad} moneda(s) de ${moneda.nombre}\n`;
                }
            }
        });
        return mensaje;
    }

    gestionarCambio(valorProducto, montoPagado) {
        const cambio = montoPagado - valorProducto;

        if (cambio < 0) {
            return 'El monto pagado es insuficiente.';
        } else if (cambio === 0) {
            return 'No se necesita dar cambio.';
        } else {
            const resultado = this.calcularCambio(cambio);
            return this.darCambio(resultado);
        }
    }
}

export default Cambio;
