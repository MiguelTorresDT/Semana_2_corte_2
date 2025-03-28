import empleado from "./Cl_empleado.js";

export default class administrativo extends empleado{
    constructor(sueldoBase, primaFija){
        super(sueldoBase);
        this.primaFija = primaFija;
    }

    calcularSueldoAd(){
        return  this.sueldoBase + this.primaFija;
    } 
}