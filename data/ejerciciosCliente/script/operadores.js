
   function mostrar(){
   var a = 9;
    var b = 5;
    var c = "9";
    document.write("<h1>Operadores JavaScript</h1>");
  
    document.write("<h2>Operadores aritmeticos</h2>")
    document.writeln(a+"++="+(a++)+"<br>");
    document.writeln(a+"--="+(a--)+"<br>");
    document.writeln(a+"%"+b+"="+(a%b)+"<br>");
    document.writeln(a+"+="+b+"="+(a+=b)+"<br>");
    document.writeln(a+"-="+b+"="+(a-=b)+"<br>");
    document.writeln(a+"*="+b+"="+(a*=b)+"<br>");
    document.writeln(a+"/="+c+"="+(a/=c)+"<br>");

    document.write("<h2>Operadores comparacion</h2>")
    document.write(a+">"+b+"="+(a>b)+"<br>");
    document.writeln(a+"=="+c+"="+(a==c)+"<br>");
    document.writeln(a+"==="+c+"="+(a===c)+"<br>");
    document.writeln(a+"!="+c+"="+(a!=c)+"<br>");
    
    var num1=6;
    var num2=15;
    document.write("Prueba condicional IF<br>");
    if(num1>num2){
        document.write(num1+">"+num2);

    }else{
        document.write(num1+"<"+num2);
    }
    var numeropantalla=prompt("Introduce info");
    document.write("<br>Has escrito: "+numeropantalla);

    
}
   // mostrar();
