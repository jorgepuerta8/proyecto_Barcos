let jugador1 = document.getElementById('Tablero1')
let tablero1 = [];
tablero1 = [...jugador1.children[0].children];
celdas = [];
tablero1.forEach((tr)=>{
    celdas.push(...tr.children);
})


jugador1.addEventListener('click',(e)=>{
    if(e.target.nodeName == "TD"){
        e.target.setAttribute('class','golpe');
    }
})

let boton = document.getElementById('spawn-barco')

boton.addEventListener('click',(e)=>{
    let celda = e.target;
    celda = celdas[12].setAttribute('class','golpe');
    let counter = 12;
    e.target.addEventListener('keydown',(e)=>{
        if(e.keyCode ==39){
            counter ++;
            celdas[counter-2].removeAttribute('class','golpe');
            celdas[counter].setAttribute('class','golpe');
        }
        if(e.keyCode ==37){
            counter --;
            celdas[counter+2].removeAttribute('class','golpe');
            celdas[counter].setAttribute('class','golpe');
        }
        if(e.keyCode ==38){
            celdas[counter].removeAttribute('class','golpe');
            celdas[counter-1].removeAttribute('class','golpe');
            counter -=10;
            
            celdas[counter].setAttribute('class','golpe');
        }
    })
})

