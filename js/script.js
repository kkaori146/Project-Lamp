var quebrada = false;

function mudaLampada(tipo) {
    if (tipo == 1) {
        arquivo = "./images/lampada-acesa.jpg";
    }
    if (tipo == 2) {
        arquivo = "./images/lampada-apagada.jpg";
    }
    if (tipo == 3) {
        arquivo = "./images/lampada-quebrada.jpg";

    }
    if(!quebrada) {
window.document.getElementById('luz').src=arquivo;
if (tipo == 3) {
    quebrada = true;
}
}
}
