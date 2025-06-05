//4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del
//  array “y” que no se encuentran en el array “x” utilizando para tal fin una única
//  línea de código. 

const y = ["d", "n", "l", "bro", "g"];
const x = ["n", "bro", "c", "|"]; 

// Esta es la línea de código que se solicita en la consigna
    
const result = y.filter(item => !x.includes(item));

//
console.log(result);