$(document).ready(function(){
    $(".menu_lateral li:has(ul)").click(function(e){
        e.preventDefault();

        if ($(this). hasClass("activado")){
            $(this).removeClass("activado");
            $(this).children("ul").slideUp;
        } else {
            $(".menu_lateral li:has(ul)").slideUp();
            $(".menu_lateral li").removeClass("activado")
            $(this).addClass("activado");
            $(this).children(".submenu_lateral").slideDown;
        };
    });
});