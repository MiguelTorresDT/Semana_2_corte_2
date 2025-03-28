/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
*/

import fijo from "./Cl_fijo.js";
import contratado from "./Cl_contratado.js";

let fi1 = new fijo("Carlos", 25, 100);
let fi2 = new fijo("carolina", 40, 90);

let salida = document.getElementById("salida");

salida.innerHTML = `
Profesor fijo 1
<br>nombre: ${fi1.nombre}
<br>monto del bono: ${fi1.bono}
<br>monto sueldo: ${fi1.sueldo}
<br>ingreso total del profesor fijo 1: ${fi1.sueldoTotFi()}$
<br>
<br>
Profesor fijo 2:
<br>nombre: ${fi2.nombre}
<br>monto del bono: ${fi2.bono}
<br>monto sueldo: ${fi2.sueldo}
<br>ingreso total del profesor fijo 2: ${fi2.sueldoTotFi()}$
`
