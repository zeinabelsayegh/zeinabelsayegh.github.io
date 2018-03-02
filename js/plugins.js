$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle(2000,function(){$("span").toggle(1000);});
    });
    
    $("button").dblclick(function(){
        $("p").toggle(2000,function(){$("span").toggle(1000);});
    });
    /*$("button").mouseenter(function(){
       $("p").css("color","#F4CE24");
       $(this).css("color","#F4CE24");
    });
    $("button").mouseleave(function(){
        $("p").css("color","#7196ed");    
        $(this).css("color","#7196ED")
    });*/
    
   /* $("button").hover(function(){
        $("p").hide(2000);
    },
    function(){
        $("p").show(2000);   
    }
    );*/
   $(".ff").bind("click",function(){
        $(this).hide(1000);
    
    
    })
    });