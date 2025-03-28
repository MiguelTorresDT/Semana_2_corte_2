/*INTRO3-HERENCIA 
Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(), que sólo 
retorna sueldoBase. La clase Cl_obrero hereda de Cl_empleado y también tiene horas extras a 
$2 cada una; la clase Cl_administrativo hereda de Cl_empleado y tiene una prima fija. El 
método calcularSueldo() debe hacer lo indicado en cada clase hija.
*/

import administrativo from "./Cl_administrativo.js";
import obrero from "./Cl_obrero.js";

let admin1 = new administrativo(300, 2),
    obre1 = new obrero(200, 4);

let salida = document.getElementById("salida");