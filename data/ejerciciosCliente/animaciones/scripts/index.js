
$(document).ready(function(){

    $("*").on("click",function(){
       // $(this).fadeOut(2000);   
       var clicked = this.id;
       $("#"+clicked+"").fadeOut(2000);
      
   });
   

});