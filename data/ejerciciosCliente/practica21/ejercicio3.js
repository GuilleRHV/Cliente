

function main() {
    

    
    

//Actividades

    var deportes = ["pilates","pesas","spinning","estiramientos","boxeo","yoga","descanso","meditacion"];

    for (var i=0;i<6;i++){
        deportes.forEach((dep,i) => {
            var td1 = document.createElement("td");
            var txt1 = document.createTextNode(dep);
            //No me sirve en este caso el mentodo crearFila
            td1.appendChild(txt1);
            var identif1 = (i+1).toString();
            var mostrar1 = document.getElementById("ac"+identif1);
            mostrar1.appendChild(td1);
        });
    }



    
//FISIO
    var fisio = ["Andrea","Jose","Pedro","Laura","Andrea","Jose","Ivan","Ines","Pepe","Andrea"];

    for (var i=0;i<5;i++){
        fisio.forEach((persona,ind) => {
            var td = document.createElement("td");
            var txt = document.createTextNode(persona);
            //No me sirve en este caso el mentodo crearFila
            td.appendChild(txt);
            var identif = (ind+1).toString();
            var mostrar = document.getElementById("fi"+identif);
            mostrar.appendChild(td);
        });
    }
    


}


  function enviarfisio(){
      var mostrar="";
      var tablafisio=document.getElementById("tablafisio");
      var persona = document.getElementsByName("fisio");
      
      var td = tablafisio.getElementsByTagName("td");
      for (var i=0;i<persona.length;i++){
          if(persona[i].checked == true){
              mostrar = persona[i].value;
              alert(persona[i].value);
          }
      }
      
    //  window.alert(td.length+"a");
      //Ahora pintamos
      for (var x = 0; x<5;x++){
            for(var y=0; y<td.length;y++){
               if(td[y].innerHTML==mostrar){
                td[y].style.backgroundColor="yellow";
                
               }
            }
      }

  }

  function enviaractividad(){
    var mostrar="";
    var tablaact=document.getElementById("tablaact");
    var actividad = document.getElementsByName("act");
    
    var td = tablaact.getElementsByTagName("td");
    for (var i=0;i<actividad.length;i++){
        if(actividad[i].checked == true){
            mostrar = actividad[i].value;
            alert(actividad[i].value);
        }
    }
    
  //  window.alert(td.length+"a");
    //Ahora pintamos
    for (var x = 0; x<5;x++){
          for(var y=0; y<td.length;y++){
             if(td[y].innerHTML==mostrar){
              td[y].style.backgroundColor="yellow";
              
             }
          }
    }

}
