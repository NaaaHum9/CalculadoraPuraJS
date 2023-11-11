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

//funcion main donde se va imprimir los resultados
function Main() {
    //Se crea una instancia de la clase suma, osea se crea como una caja de la clase
    let operacion = new Calculadora();

    //Ingresar los numeros
    operacion.variable1 = parseFloat(prompt("Ingrese un numero para la suma: "))
    operacion.variable2 = parseFloat(prompt("Ingrese el segundo numero: "));

    //Realiza la suma e imprime el resultado
    let resultado1 = operacion.sumar();
    let resultado2 = operacion.restar();
    let resultado3 = operacion.multi();
    let resultado4 = operacion.division();
    console.log("La suma es: " + resultado1);
    console.log("La suma es: " + resultado2);
    console.log("La suma es: " + resultado3);
    console.log("La suma es: " + resultado4);
}

Main();