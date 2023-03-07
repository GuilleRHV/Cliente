

class Forma {
    color = "rojo";
    type = "rectangulo"
    constructor() {

    }

    setColor(color) {
        this.color = color;
    }
}


class Circulo extends Forma  {
    type = "circulo";
    constructor() {
        super();
    }

    show(){
        console.log('Este es un '+this.type+' de color '+this.color);
    }
}

function main(){
var c1 = new Circulo();
c1.show();

c1.setColor("verde");
c1.show();

}