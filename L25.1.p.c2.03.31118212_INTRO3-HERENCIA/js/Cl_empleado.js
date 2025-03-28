export default class empleado{
    constructor(sueldoBase){
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo(){
        return this.sueldoBase;
    }
}