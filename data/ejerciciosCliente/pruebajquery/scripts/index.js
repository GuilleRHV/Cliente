$(document).ready(function () {

    $("#cubo").css("width", '300px').css("height", '300px').css("border", '1px solid');



    $("#cubo").on("click", function () {
        $("#cubo").css("background-color", 'red');
        $("#cubo").animate({"margin-top": "220px"},"fast").animate({"margin-left": "220px"},"fast");
        
        
    });

$("#check").attr("checked",true);
$("#info").html("prueba");


$(".info").on("click", function () {
   // alert($(this).text());
    alert(Math.floor(Math.random()*(100-40)+40));
});

});