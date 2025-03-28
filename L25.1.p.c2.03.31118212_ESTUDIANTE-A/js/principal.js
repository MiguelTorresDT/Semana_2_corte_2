/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca. 

*/

import becado from "./Cl_becado.js";

let bec1 = new becado("Mary", 132, 8),
    bec2 = new becado("Alirio", 315, 35);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br>Nombre: ${bec1.nombre}
<br>Acumulado de notas: ${bec1.acNotas}
<br>Nota promedio: ${bec1.promNotas()}
<br>monto de la beca: ${bec1.beca()}$
<br>
<br>
<br>
<br>Nombre: ${bec2.nombre}
<br>Acumulado de notas: ${bec2.acNotas}
<br>Nota promedio: ${bec2.promNotas()}
<br>monto de la beca: ${bec2.beca()}`