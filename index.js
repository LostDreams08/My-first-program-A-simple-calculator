/*  Mi Primer Programa | Calculadora Simple
INSTRUCCIONES SIMPLES QUE ME LLEVARON A DESARROLLAR MI PROGRAMA.
1. Recibir un Input
2. Revisar el Input y operadores
3. Procesar el calculo y devolver el resultado

Autor: https://github.com/lostdreams08
Compañero: https://github.com/soydat
*/

function calculadora() {
  /* PROGRAMA ACA EL ARRAY DE OPERADORES */
  /* (operacion === operadores.tipo) */
  const operadores = {
    suma: ["+", "mas"],
    resta: ["-", "menos"],
    division: ["dividido"],
    multiplicacion: ["por"],
  };

  /* PROGRAMA ACA DENTRO EL PROCESAMIENTO DEL INPUT !*/
  const num1 = process.argv[2];
  console.log("El num1 tiene el valor de:", num1);

  const operacion = process.argv[3];
  console.log("La Operacion tiene el Operador:", operacion);

  const num2 = process.argv[4];
  console.log("El num2 tiene el valor de:", num2);

  /* PROGRAMA ACA DENTRO EL SISTEMA OPERATIVO DE LA CALCULADORA!*/

  const Num1Parseado = parseInt(num1);
  const Num2Parseado = parseInt(num2);

  for (let i = 0; i < operadores.suma.length; i++) {
    if (operacion === operadores.suma[i]) {
      console.log(Num1Parseado + Num2Parseado);
    }
  }

  for (let i = 0; i < operadores.resta.length; i++) {
    if (operacion === operadores.resta[i]) {
      console.log(Num1Parseado - Num2Parseado);
    }
  }

  for (let i = 0; i < operadores.multiplicacion.length; i++) {
    if (operacion === operadores.multiplicacion[i]) {
      console.log(Num1Parseado * Num2Parseado);
    }
  }

  for (let i = 0; i < operadores.division.length; i++) {
    if (operacion === operadores.division[i]) {
      console.log(Num1Parseado / Num2Parseado);
    }
  }
}

function main() {
  calculadora();
}

main();
