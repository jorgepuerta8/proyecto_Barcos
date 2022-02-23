window.onload = menuCreacion;

/**
 * Creación del menú interactivo con el cual el usuario elige el tamaño del tablero
 * @author Cosmin
 * @return{Menu}
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
        let tamano = input.value;
        contenedor.innerHTML = '';
        crearTabla(tamano);
    })
}
/**
 * //Función creacion tablero, recibe el tamaño por parámetro
 * @author Cosmin
 * @param {int} tamano 
 * @return {void} tablero 
 * 
 */
function crearTabla(tamano){
    
    tamano = parseInt(tamano, 10);

    let contenedor = document.getElementById('campo');
    let fragmentoDOM = document.createDocumentFragment();
    let tabla = document.createElement('table');
    tabla.setAttribute('id','tablero');

    if(tamano < 4){
        tamano = 4;
    }
    else if(tamano > 10){
        tamano = 10;
    }
    else if(isNaN(tamano)){
        tamano = 4;
    }
    
    for(let i = 0; i< tamano +1; i++){
        //Crear fila
        let fila = document.createElement('tr');
        for(let j = 0; j< tamano +1; j++){
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

    crearControles(tamano);
}
/**
 * Función que genera los controles de coordenadas
 * @author Cosmin
 * @param {int} tamano 
 * @return {void} opciones
 */
function crearControles(tamano){
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
    tituloX.setAttribute('label','X')
    //Creacion opciones
    for(let i = 0 ; i < tamano;i++){
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
    tituloY.setAttribute('label','Y')
    //Creacion opciones
    for(let i = 0 ; i < tamano;i++){
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

    let tamanoBarco = document.getElementsByName('tamano')[0].value;
    let x = document.getElementsByName('xy[]')[0].value;
    let y = document.getElementsByName('xy[]')[1].value;
    let direccion = document.getElementsByName('direccion')[0].value;

}