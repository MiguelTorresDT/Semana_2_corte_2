import profesor from "./Cl_profesor.js";

export default class contratado extends profesor{
    constructor(nombre, bono, horas){
        super(nombre, bono);
        this.horas = horas;
    }

    sueldoTotCon(){
        return this.bono + (this.horas * 10);
    }
}