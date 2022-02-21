let jugador1 = document.getElementById('Tablero1')
let tablero1 = [];
tablero1 = [...jugador1.children[0].children];
celdas = [];
tablero1.forEach((tr)=>{
    celdas.push(...tr.children);
})


jugador1.addEventListener('click',(e)=>{
    e.target.setAttribute('class','barco');
    if(celdas.includes(e.target)){
        console.log('boink')
    }
})



