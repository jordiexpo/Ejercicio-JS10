let numero = 1; /*Primero definimos que la variable numero que sera igual a 1 */
let i = 0;/*Luego definimos la variable i como 0 */
do{
  if(i === 0) {
   i++;
   numero--;
   console.log(numero); 
  } else {
   numero++;
   console.log(numero);
  }
} while (numero < 5);