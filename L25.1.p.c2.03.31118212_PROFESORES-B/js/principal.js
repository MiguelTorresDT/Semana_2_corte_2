/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
*/

import fijo from "./Cl_fijo.js";
import contratado from "./Cl_contratado.js";

let con1 = new contratado("Rafael ", 30, 15);
let con2 = new contratado("Felicia", 30, 20);

let salida = document.getElementById("salida");

salida.innerHTML = `
Profesor contratado 1
<br>nombre: ${con1.nombre}
<br>monto del bono: ${con1.bono}
<br>cantidad de horas: ${con1.horas}
<br>ingreso total del profesor contratado 1: ${con1.sueldoTotCon()}$
<br>
<br>
Profesor contratado 2:
<br>nombre: ${con2.nombre}
<br>monto del bono: ${con2.bono}
<br>cantidad de horas: ${con2.horas}
<br>ingreso total del profesor contratado 2: ${con2.sueldoTotCon()}$
`
