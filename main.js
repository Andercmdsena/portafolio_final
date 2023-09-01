function activarPanel(){
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");
    
    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}


var link = document.getElementById("fileCss")

function dark(){
    link.href="style_black.css"
}
function red(){
    link.href="style_red.css"
}
function yellow(){
    link.href="style.css"
}