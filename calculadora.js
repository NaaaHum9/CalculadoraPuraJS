class Calculadora{
    //se crea el constructor, es lo que va a tener tu clase
    constructor(){
        this.variable1 = 0;
        this.variable2 = 0;
    }

    //Metosdo, donde se crea la suma
    sumar(){
        return this.variable1 + this.variable2;
    }

    restar(){
        return this.variable1 - this.variable2;
    }

    multi(){
        return this.variable1 * this.variable2;
    }

    division(){
        if (this.variable2 == 0) {
            console.log("No se puede hacer la division");
        }else{
            return this.variable1 / this.variable2;
        }
    }
}

function sumar(operacion) {
    return operacion.sumar();
}

function restar(operacion) {
    return operacion.restar();
}

function multi(operacion) {
    return operacion.multi();
}

function division(operacion) {
    return operacion.division();
}
//funcion main donde se va imprimir los resultados
function Main() {
    //Se crea una instancia de la clase suma, osea se crea como una caja de la clase
    let operacion = new Calculadora();

    //Ingresar los numeros
    operacion.variable1 = parseFloat(prompt("Ingrese un numero para la suma: "))
    operacion.variable2 = parseFloat(prompt("Ingrese el segundo numero: "));

    //Realiza la suma e imprime el resultado
    console.log("La suma es: " + sumar(operacion));
    console.log("La resta es: " + restar(operacion));
    console.log("La multiplicacion es: " + multi(operacion));
    console.log("La division es: " + division(operacion));
}

Main();