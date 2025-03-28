import profesor from "./Cl_profesor.js";

export default class fijo extends profesor{
    constructor(nombre, bono, sueldo){
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    sueldoTotFi(){
        return this.bono + this.sueldo;
    }
}