var aeropuerto = false;

class Aeropuerto {

    nombre = "";
    ciudad = "";
    nvuelos = "";
    vuelos = [];
    constructor(nombre, ciudad, nvuelos) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.nvuelos = nvuelos;
    }

    setnvuelos(newnvuelos) {
        this.nvuelos = this.newnvuelos;
    }





}
function crearAeropuerto() {
    aerop = new Aeropuerto(document.getElementById("nombreaeropuerto").value, document.getElementById("ciudad").value, document.getElementById("nvuelos").value);
    aeropuerto = true;
}



/************************************** */

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
    aerop = new Aeropuerto();
}
function calcular() {
    hora = parseInt(document.getElementById("hor").value);
    minutos = parseInt(document.getElementById("min").value);
    hora2 = parseInt(document.getElementById("hor2").value);
    minutos2 = parseInt(document.getElementById("min2").value);
    horavalida = false;
    if (hora > hora2) {
        horavalida = false;
    } else if (hora == hora2) {

        if (minutos > minutos2) {
            horavalida = false;
        } else {
            horavalida = true;
        }
    } else {
        horavalida = true;
    }
    /**************************************** */
    alert(hora + ":" + minutos + "---" + hora2 + ":" + minutos2);



    if (aeropuerto) {
        alert("Hay un aeropuerto :)");
        if (horavalida) {
            alert("La hora es valido");
            var horasalidacorrecta = hora + ":" + minutos;
            var horallegadacorrecta = hora2 + ":" + minutos2;
            vuelo = new Vuelo(parseInt(document.getElementById("codigo").value), horasalidacorrecta, horallegadacorrecta);

            aerop.vuelos.push(vuelo);
            aerop.nvuelos = aerop.nvuelos + aerop.vuelos.length;
        } else {
            alert("La hora no es valida");
        }
    } else {
        alert("No hay un aeropuerto")
    }
    // alert(hora + ":" + minutos);
}