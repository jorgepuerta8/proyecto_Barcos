window.onload = menuCreacion;

/**
 * Creación de la clase Barco
 * @author Cosmin
 * @param {int} tamano
 * @param {int} posicionX
 * @param {int} posicionY
 * @param {direccion} direccion
 * 
 */
class Barco {

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

//Variables globales
var barcosColocados = [];
var tamanoTablero;

/**
 * @author Cosmin
 * Creacion del menu interactivo de peticion de tamaño del tablero a jugar
 * @return {void} generacion de tablero y opciones
 */
function menuCreacion(){

    let contenedor = document.getElementById('campo');
    let fragmentoDOM = document.createDocumentFragment();

    //Creo label
    let texto = document.createElement('label');
    texto.textContent ='Indicar tamaño tablero: ';
    texto.setAttribute('for','nr');

    //Input que será el tamaño del tablero
    let input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('name','nr');
    input.setAttribute('id','nr');

    //Boton para iniciar
    let boton = document.createElement('button');
    boton.setAttribute('type','button');
    boton.textContent ='Cargar';

    fragmentoDOM.appendChild(texto);
    fragmentoDOM.appendChild(input);
    fragmentoDOM.appendChild(boton);

    contenedor.appendChild(fragmentoDOM);
    //Listener del boton
    boton.addEventListener('click',() => {
        tamanoTablero = parseInt(input.value,10);
        contenedor.innerHTML = '';
        crearTabla();
    })
}
/**
 * //Función creacion tablero, recibe el tamaño por parámetro
 * @author Cosmin
 * @param {int} tamano 
 * @return {void} tablero 
 * 
 */
function crearTabla(){
    
    let contenedor = document.getElementById('campo');
    let fragmentoDOM = document.createDocumentFragment();
    let tabla = document.createElement('table');
    tabla.setAttribute('id','tablero');

    if(tamanoTablero < 4){
        tamanoTablero = 4;
    }
    else if(tamanoTablero > 10){
        tamanoTablero = 10;
    }
    else if(isNaN(tamanoTablero)){
        tamanoTablero = 4;
    }
    
    for(let i = 0; i< tamanoTablero +1; i++){
        //Crear fila
        let fila = document.createElement('tr');
        for(let j = 0; j< tamanoTablero +1; j++){
            //Crear celda
            let celda = document.createElement('td');
            //Primera celda vacia
            if(i == 0 && j == 0){
                fila.appendChild(celda);
            }
            //Primera fila con indices
            else if (i == 0){
                celda.textContent= j;
                fila.appendChild(celda);
            }
            //Primera columna con indices
            else if(i>0 && j==0){
                celda.textContent = i;
                fila.appendChild(celda);
            }
            //Celdas vacias
            else{
                fila.appendChild(celda);
            }
        }
        tabla.appendChild(fila);
    }

    fragmentoDOM.appendChild(tabla);
    contenedor.insertBefore(fragmentoDOM,contenedor.firstChild);

    crearControles();
}
/**
 * Función que genera los controles de coordenadas
 * @author Cosmin
 * @param {int} tamano 
 * @return {void} opciones
 */
function crearControles(){
    let fragmentoDOM = document.createDocumentFragment();

    //Label para el select del tamaño del barco
    let texto1 = document.createElement('label');
    texto1.textContent ='Tamaño barco: ';
    texto1.setAttribute('for','tamano');

    //Select tamaño barco
    let tamanoBarco = document.createElement('select');
    tamanoBarco.setAttribute('name', 'tamano');
    
    //Opciones select tamaño barco
    for(let i = 0 ; i < 4;i++){
        let opc =document.createElement('option');
        opc.setAttribute('value',i+1);
        opc.textContent=`Barco de ${i+1} casillas`;
        tamanoBarco.appendChild(opc);
    }

    fragmentoDOM.appendChild(texto1);
    fragmentoDOM.appendChild(tamanoBarco);
    
    //Label selector coordenadas
    let texto2 = document.createElement('label');
    texto2.textContent ='Coordenadas: ';
    texto2.setAttribute('for','cooredenadas');

    //Select coordenadas x
    let x = document.createElement('select');
    x.setAttribute('name','xy[]');
    //Optgroup en select
    let tituloX = document.createElement('optgroup');
    tituloX.setAttribute('label','Horizontal')
    //Creacion opciones
    for(let i = 0 ; i < tamanoTablero;i++){
        let opc =document.createElement('option');
        opc.setAttribute('value',i+1);
        opc.textContent=i+1;
        tituloX.appendChild(opc);
    }
    x.appendChild(tituloX);

    //Select coordenadas y
    let y = document.createElement('select');
    y.setAttribute('name','xy[]');
    //Optgroup en select
    let tituloY = document.createElement('optgroup');
    tituloY.setAttribute('label','Vertical')
    //Creacion opciones
    for(let i = 0 ; i < tamanoTablero;i++){
        let opc =document.createElement('option');
        opc.setAttribute('value',i+1);
        opc.textContent=i+1;
        tituloY.appendChild(opc);
    }
    y.appendChild(tituloY);

    fragmentoDOM.appendChild(texto2);
    fragmentoDOM.appendChild(x);
    fragmentoDOM.appendChild(y);

    //Label para selector direccion
    let texto3 = document.createElement('label');
    texto3.textContent ='Dirección: ';
    texto3.setAttribute('for','direccion');

    //Select direccion
    let direccion = document.createElement('select');
    direccion.setAttribute('name','direccion');

    //Opciones selector de direccion
    let derecha = document.createElement('option');
    derecha.setAttribute('value','derecha');
    derecha.textContent='Derecha';
    let abajo = document.createElement('option');
    abajo.setAttribute('value','abajo');
    abajo.textContent='Abajo';
    direccion.appendChild(derecha);
    direccion.appendChild(abajo);

    fragmentoDOM.appendChild(texto3);
    fragmentoDOM.appendChild(direccion);

    //Boton para colocar el barco
    let boton = document.createElement('button');
    boton.setAttribute('type','button');
    boton.setAttribute('id','colocar');
    boton.textContent='Colocar';

    fragmentoDOM.appendChild(boton);

    let caja = document.getElementById('campo');
    let controles = document.createElement('div');
    controles.setAttribute('id','controles');

    controles.appendChild(fragmentoDOM);
    caja.appendChild(controles);

    boton.addEventListener('click',colocarBarco);
}
/**
 * Funcion que nos coloca el barco en el tablero según 
 * @author Cosmin
 * @params [x, y] Las coordenadas del Select
 * @return {void} //Barco colocado en el tablero
 */
function colocarBarco() {

    //Coger los datos de los inputs
    let tamanoBarco = document.getElementsByName('tamano')[0].value;
    let x = document.getElementsByName('xy[]')[0].value;
    let y = document.getElementsByName('xy[]')[1].value;
    let direccion = document.getElementsByName('direccion')[0].value;

    if(comprobarBarco(tamanoBarco,x,y,direccion)){
        barcosColocados.push(new Barco(tamanoBarco,x,y,direccion));
    }
}

function comprobarBarco(tamanoBarco,x,y,direccion){
    let valido = false;

    if(conflictoZonas(tamanoBarco,x,y,direccion)){
        if(direccion == 'derecha'){
            if(tamanoTablero +1 >= tamanoBarco + x){
                valido = true;
            }
        }
        else if(direccion == 'abajo'){
            if(tamanoTablero +1 >= tamanoBarco + y){
                valido = true;
            }
        }
    }

    return valido;
}

function conflictoZonas(tamanoBarco,x,y,direccion){
    let valido = true;

    let barcoNuevo = new Barco(tamanoBarco,)
}