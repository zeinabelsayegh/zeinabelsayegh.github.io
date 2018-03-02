$(document).ready(function(){
    $(".right>i").click(function(){
        $(".computer").fadeToggle(1000,function(){
            $(".two-player").fadeToggle(1000);
            
        });
        
        
        });
    
    
    
    
    var FirstPlayer1=$(".one>li:nth-child(1)");
    FirstPlayer1.click(function(){
        alert("yes");
        $("#sone").fadeOut(1000);
        $("#pone").fadeOut(1000);
        });
    
    
    
    
    
});