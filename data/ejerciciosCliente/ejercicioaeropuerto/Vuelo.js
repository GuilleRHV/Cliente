class Vuelo {
    codigo = "";
    horallegada = "";
    horasalida = "";
    constructor(codigo, horallegada, horasalida) {
        this.codigo = codigo;
        this.horallegada = horallegada;
        this.horasalida = horasalida;
    }
    sethorallegada(nuevahora) {
        this.horallegada = nuevahora;
    }
    sethorasalida(nuevahora) {
        this.horasalida = nuevahora;
    }



}

function main() {
    //  var hora = prompt("introduce hora de llegada");
    // var minutos = prompt("minutos de llegada");

}
function calcular() {
    hora = document.getElementById("hor").value;
    minutos = document.getElementById("min").value;
    hora2 = document.getElementById("hor2").value;
    minutos2 = document.getElementById("min2").value;
    menor = false;
    if (hora > hora2) {
        menor = false;
    }else if(hora == hora2){

        if (minutos > minutos2) {
            menor = false;
        } else {
            menor = true;
        }
    }else if(hora < hora2){
        menor = true;
    }
    /********************* */

    if(menor){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
   // alert(hora + ":" + minutos);
}