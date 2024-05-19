function calculate(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor ingrese números válidos';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = num1 + num2;
                break;
            case 'restar':
                resultado = num1 - num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            case 'dividir':
                if (num2 === 0) {
                    resultado = 'No se puede dividir por cero';
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = 'Operación no válida';
        }
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
