window.onload = menuCreacion;

function menuCreacion(){
    let contenedor = document.getElementById('campo');
    let fragmentoDOM = document.createDocumentFragment();

    let texto = document.createElement('label');
    texto.textContent ='Indicar tamaño tablero: ';
    texto.setAttribute('for','nr');

    let input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('name','nr');
    input.setAttribute('id','nr');

    let boton = document.createElement('button');
    boton.setAttribute('type','button');
    boton.textContent ='Cargar';

    fragmentoDOM.appendChild(texto);
    fragmentoDOM.appendChild(input);
    fragmentoDOM.appendChild(boton);

    contenedor.appendChild(fragmentoDOM);
    
    boton.addEventListener('click',() => {
        let tamano = input.value;
        console.log(input.value);
        contenedor.innerHTML = '';
        crearTabla(tamano);
    })
}

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
}
