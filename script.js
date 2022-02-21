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

let boton = document.getElementById('coger-barco')



window.onload = function(){
    draggable('one');
};

var dragObj = null;
function draggable(id)
{
    var obj = document.getElementById(id);
    obj.style.position = "absolute";
    obj.onmousedown = function(){
            dragObj = obj;
    }
}

document.onmouseup = function(e){
    dragObj = null;
};

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    if(dragObj == null)
        return;

    dragObj.style.left = x +"px";
    dragObj.style.top= y +"px";
};