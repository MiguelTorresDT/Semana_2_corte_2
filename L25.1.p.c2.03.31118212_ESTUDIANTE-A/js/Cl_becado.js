import estudiante from "./Cl_estudiante.js";

export default class becado extends estudiante{
    constructor(nombre, acNotas, cantMaterias){
        super(nombre, acNotas, cantMaterias);
    }
    
    promNotas(){
        return this.acNotas / this.cantMaterias;
    }
    beca(){
       if(this.promNotas() > 15){
        return 30;
       }
       else if(this.promNotas() >= 10 && this.promNotas() <= 15){
        return 20;
       }

       else 
       return "no recibe beca";
    }
}