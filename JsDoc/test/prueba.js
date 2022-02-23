class Barco{
    constructor(tamano, posicionX, posicionY, direccion){
        this.tamano = tamano;
        this.posicionX = [];
        this.posicionY = [];
        this.novalidoX = [];
        this.novalidoY = [];
        this.direccion = direccion;

        /*
        * Relleno el arrray de posicion en el caso de que 
        * el barco se coloque en horizontal
        */
        if(this.direccion == 'derecha'){
            this.posicionY.push(posicionY);
            for(let i = 0;i < tamano; i++){
                this.posicioX.push(posicionX + i);
            }

            //Zona no valida
            this.novalidoY.push(posicionY);
            this.novalidoY.push(posicionY-1);
            this.novalidoY.push(posicionY+1);
            this.novalidoX.push(posicionX-1);
            this.novalidoX.push(posicionX + tamano);
            for (let i = 0; i < tamano; i++) {
                this.novalidoX.push(posicionX + i);
            }
            return true;
        }

        /*
        * Relleno el arrray de posicion en el caso de que 
        * el barco se coloque en vartical
        */
        else if(this.direccion == 'abajo'){
            this.posicionX.push(posicionX);
            for(let i = 0;i < tamano; i++){
                this.posicionY.push(posicionY + i);
            }

            //Zona no valida
            this.novalidoX.push(posicionX);
            this.novalidoX.push(posicionX - 1);
            this.novalidoX.push(posicionX + 1);
            this.novalidoY.push(posicionY - 1);
            this.novalidoY.push(posicionY + tamano);
            for (let i = 0; i < tamano; i++) {
                this.novalidoY.push(posicionY + i);
            }
        }
    }
}
module.exports=new Barco();