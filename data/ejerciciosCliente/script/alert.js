function mifuncion(){
    var global = 6;
    var local = "local";

    window.alert(global);
    window.alert(local);
    global++;
    window.alert(global);

    document.write("Hola<br>mundo");
}
mifuncion();