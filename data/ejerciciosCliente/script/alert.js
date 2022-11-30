function mifuncion(){
    var global = 6;
    var local = "local";

    window.alert(global);
    window.alert(local);
    global++;
    window.alert(global);

    document.write("Hola<br>mundo");
    var arr = [1,"hola",2,"perroflauta"];
    var arr1 = ["uno","dos","tres"];
    var arr2 = [1,2,3,4,9,5,4,2,0];
    var long="";
    for(var i=0; i<arr.length;i++){
        if (long.length<arr[i].length){
            long=arr[i];
        }
    }

    var arr3 =[1,2,3,4,5];
    for(var i of arr3){
        console.log(i+", ");
        i++;
    }
    var l="";
    for(var i=0; i<arr.length;i++){
       l=l+arr[i]+", " ;
    }
    console.log("Array For normal: "+l);
    alert("El de mayor longitud es: "+long);
    alert("Max arr2: "+Math.max(arr2));
    alert("Posicion tres: "+arr1.indexOf("tres"));
}
mifuncion();