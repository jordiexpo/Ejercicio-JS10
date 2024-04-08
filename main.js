let numero = 1;/*Primero definimos que la variable numero que sera igual a 1 */
let i = 0;/*Luego definimos la variable i como 0 */
do{ /*Con el do while queremos crear un bucle */
  if(i === 0) {
   i++;
   numero--;
   console.log(numero); 
  } else {
   numero++;
   console.log(numero);
  }
} while (numero < 5);/*Aqui indicamos que el bucle seguira siempre que la variable numero sea menor a 5, eso quiere decir que al llegar a ese numero se parara*/