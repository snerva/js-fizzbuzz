//scrivi un programma che stampi in console numeri da 1 a 100
for ( let i=1; i<=100; i++) {
  //per i multipli sia di 3 che di 5 stampa FizzBuzz
  //if
  if ((i%15) == 0){
    console.log("FizzBuzz");
  //per i multipli di 3 stampa Fizz
  //else if
  } else if ((i%3) == 0){
    console.log("Fizz");
    //per i multipli di 5 stampa Buzz
  //else if &&
  } else if ((i%5) == 0){
    console.log("Buzz");
  //se non é multiplo di nessuno dei due allora stampa il numero
  //else
  } else {
    console.log(i);
  }
}
