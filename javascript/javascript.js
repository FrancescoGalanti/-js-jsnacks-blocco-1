/*
**javascript
**/


//  // esercizio primo //
//
//
// // prima variabile //
// var num1 = parseInt(prompt("Inserisci il primo numero") );
//
//
//  // seconda variabile //
// var num2 = parseInt(prompt("Inserisci il secondo numero") );
//
//
//  // output//
//  if(num1 > num2) {
//    console.log("il primo numero" + num1 + "è maggiore");
//  }
//   else if(num1 < num2 ) {
//    console.log("il secondo numero " + num2 + "è maggiore");
//  } else{
//    console.log("Numeri uguali")
//  }

// secondo esercizio //

// prima variabile //

// var label1 = prompt("inserisci parola 1");
//
// // seconda variabile //
// var label2 = prompt("inserisci parola 2");
//
// // output//
//
// if(label1.lenght > label2.lenght) {
//   console.log(label1 + "e maggiore di" + label2);
// }
// else if(label2.lenght > label1.lenght) {
//   console.log(label1 + "e minore di" + label2);
// } else{
//   console.log("la lunghezza di entrame e uguale")
// }


// terzo esercizio /7

// prima variabile //

var somma = 0;

for(var i = 0; i <=4; i++){
   var number = parseInt(prompt("inserisci un numero") );
   somma = somma + number;
}

console.log(somma);
