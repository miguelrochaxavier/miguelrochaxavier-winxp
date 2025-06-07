setTimeout(() => {
    var hora_atual = new 
Date().toLocaleTimeString("pt-BR", {
        hour : "2-digit",
        minute : "2-digit"
    });
    $("#clocker").html(hora_atual);

}, 100);

setInterval(() => {
    var hora_atual = new 
Date().toLocaleTimeString("pt-BR", {
        hour : "2-digit",
        minute : "2-digit"
    });
    $("#clocker").html(hora_atual);

}, 1000);

$(".main-icons").click(function(){
    if($(this).hasClass("selected")){
        $(this).removeClass("selected");
    }else{
        $(this).addClass("selected")
    }
});

$(".main-icons").draggable({
    contaiment: ".main",
    stop: function(){
        $(this).removeClass("selected");
        $(this).addClass("selected");
    }
});

$(document).ready(function() {  
    $("#start-xp").click(function() {  
        $("#menu-start").toggle(); 
    });  
});

$(".main-icons").draggable({
    contaiment: ".main",
    stop: function(){
        $(this).removeClass("selected");
        $(this).addClass("selected");
    }
});

document.getElementById('close-button').addEventListener('click', function() {  
    document.getElementById('close-sound').play();  
});  