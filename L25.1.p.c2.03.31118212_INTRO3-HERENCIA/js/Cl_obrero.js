import empleado from "./Cl_empleado.js";

export default class obrero extends empleado{
    constructor(sueldoBase, horasExtras){
        super(sueldoBase);
        this.horasExtras = horasExtras;
    }

    calcularSueldoOb(){
        return  this.sueldoBase + this.horasExtras * 2;
    }
}