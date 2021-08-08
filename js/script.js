var quebrada = false;

function mudaLampada(tipo) {

    if(!quebrada) {
window.document.getElementById('luz').src = "./images/" + tipo + ".jpg";
if (tipo == 'lampada-quebrada') {
    quebrada = true;
}
}
}
