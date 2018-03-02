$(document).ready(function()
{
    $(".right>i").click(function(){
        $(".computer").fadeToggle(1000,function(){
            $(".two-player").fadeToggle(1000);
        });  
    });
    
    var FirstPlayer1,FirstPlayer2,FirstPlayer3,FirstPlayer4,FirstPlayer5,FirstPlayer6,FirstPlayer7,FirstPlayer8,FirstPlayer9;
    var Computer1,Computer2,Computer3,Computer4,Computer5,Computer6,Computer7,Computer8,Computer9;
    FirstPlayer1=$("#four").children("td:nth(0)");
    FirstPlayer2=$("#four>td:nth(1)");
    FirstPlayer3=$("#four>td:nth(2)");
    FirstPlayer4=$("#five>td:nth(0)");
    FirstPlayer5=$("#five>td:nth(1)");
    FirstPlayer6=$("#five>td:nth(2)");
    FirstPlayer7=$("#six>td:nth(0)");
    FirstPlayer8=$("#six>td:nth(1)");
    FirstPlayer9=$("#six>td:nth(2)");
    Computer1=$("#four>td:nth(0)");
    Computer2=$("#four>td:nth(1)");
    Computer3=$("#four>td:nth(2)");
    Computer4=$("#five>td:nth(0)");
    Computer5=$("#five>td:nth(1)");
    Computer6=$("#five>td:nth(2)");
    Computer7=$("#six>td:nth(0)");
    Computer8=$("#six>td:nth(1)");
    Computer9=$("#six>td:nth(2)");
    
    

    
    
    
    /*FirstPlayer1.click(function(){
        if ( $("#sone:hidden"))
        {
            $(this).fadeIn(8000);
        }
        else if ( $("#sone:visible"))
        {
            $("#scone")fadeIn(8000);
        });
    /*FirstPlayer2.click(function(){
        $("#stwo").fadeIn(1000);
        if($("#sctwo:visible"))
           {
            $("#stwo").hide();
           }
        /*if( $("#sctwo").fadeIn(8000))
            {
               $("#stwo").hide();
               if(){
                
               }
            }
        else 
        {
            $("#stwo").fadeIn(1000);
            $("#sctwo").hide();
        }*/
        
    /*FirstPlayer3.click(function(){
        $("#sthree").fadeIn(1000,function(){$("#scsix").fadeIn(1000);});
    });*/
    
    var scOne=$("#scone"),sOne=$("#sone"),
        scTwo=$("#sctwo"),sTwo=$("#stwo"),
        scThree=$("#scthree"),sThree=$("#sthree"),
        scFour=$("#scfour"),sFour=$("#sfour"),
        scFive=$("#scfive"),sFive=$("#sfive"),
        scSix=$("#scsix"),sSix=$("#ssix"),
        scSeven=$("#scseven"),sSeven=$("#sseven"),
        scEight=$("#sceight"),sEight=$("#seight"),sNine=$("#snine"),
        scNine=$("#scnine");
    /*$("#four>td:nth(1)").click(function(){sTwo.show();});
    $("#four>td:nth(0)").one("click",function(){
        sOne.show(1000);
        scTwo.show(1000);
        if(sTwo.not().show())
        {
            scTwo.show(1000);
           $("#stwo").hide();
            
        }
        else
        {
           sTwo.show();
           $("span").remove("#sctwo");
           scThree.show(1000);
           $("span").remove("#sthree");
        }
    });*/
    
    
$(".computer").css("color","#F00").show(1000,function(){
    $("#four>td:nth(0)").one("click",function(){
        if(sOne.is(':hidden') && scOne.is(':hidden'))
        {
            sOne.show(1000);            
            if(sOne.is(':visible')&&sTwo.is(':visible')&&scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(sOne.is(':visible')&&sThree.is(':visible')&&scTwo.is(':hidden')&&sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(sOne.is(':visible')&&sFour.is(':visible')&&scSeven.is(':hidden')&&sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(sOne.is(':visible')&&sSeven.is(':visible')&&scFour.is(':hidden')&&sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(sOne.is(':visible')&&sFive.is(':visible')&&scNine.is(':hidden')&&sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(sOne.is(':visible')&&sNine.is(':visible')&&scFive.is(':hidden')&&sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scNine.is(':hidden') && sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scThree.is(':hidden')&& sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':hidden')&& sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(scFive.is(':hidden')&& sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scSix.is(':hidden')&& sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(sOne.is(':visible')===sTwo.is(':visible'))
            {
                scThree.show(4000);
            }
            else
            {
                scTwo.show(4000);
            }
            
        }    
    });
    
    $("#four>td:nth(1)").one("click",function(){
        if(sTwo.is(':hidden') && scTwo.is(':hidden'))
        {
            sTwo.show(1000);
            
            /*if(scThree.is(':hidden')&& sThree.is(':hidden'))
            {
                scThree.show(4000);
            }*/
            if(sOne.is(':visible')&&sTwo.is(':visible')&&scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':hidden')&& sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(scFive.is(':hidden')&& sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scSix.is(':hidden')&& sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }           
            else
            {
                scOne.show(4000);
            }
            
        }    
    });
    
    $("#four>td:nth(2)").one("click",function(){
        if(sThree.is(':hidden') && scThree.is(':hidden'))
        {
            sThree.show(1000);
            if(sOne.is(':visible')&&sThree.is(':visible')&&scTwo.is(':hidden')&&sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scFive.is(':hidden')&& sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scSix.is(':hidden')&& sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scFour.is(':hidden')&& sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else
            {
                scTwo.show(4000);
            }
            
        }    
    });
    
    $("#five>td:nth(0)").one("click",function(){
        if(sFour.is(':hidden') && scFour.is(':hidden'))
        {
            sFour.show(1000);
            if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scSix.is(':hidden')&& sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else if(scFive.is(':hidden')&& sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else
            {
                scThree.show(4000);
            }
        }    
    });
    
    $("#five>td:nth(1)").one("click",function(){
        if(sFive.is(':hidden') && scFive.is(':hidden'))
        {
            sFive.show(1000);
            if(scSix.is(':hidden')&& sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else
            {
                scFour.show(4000);
            }
        }    
    });
    
    $("#five>td:nth(2)").one("click",function(){
        if(sSix.is(':hidden') && scSix.is(':hidden'))
        {
            sSix.show(1000);
            if(scSeven.is(':hidden')&& sSeven.is(':hidden'))
            {
                scSeven.show(4000);
            }
            else if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':hidden')&&sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else
            {
                scFive.show(4000);
            }
            
        }    
    });
    
    $("#six>td:nth(0)").one("click",function(){
        if(sSeven.is(':hidden') && scSeven.is(':hidden'))
        {
            sSeven.show(1000);
            if(scEight.is(':hidden')&& sEight.is(':hidden'))
            {
                scEight.show(4000);
            }
            else if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':hidden')&&sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(scFive.is(':hidden')&&sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else
            {
                scSix.show(4000);
            }
        
        }    
    });
    
    $("#six>td:nth(1)").one("click",function(){
        if(sEight.is(':hidden') && scEight.is(':hidden'))
        {
            sEight.show(1000);
            if(scNine.is(':hidden')&& sNine.is(':hidden'))
            {
                scNine.show(4000);
            }
            else if(scOne.is(':hidden')&& sOne.is(':hidden'))
            {
                scOne.show(4000);
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scThree.is(':hidden')&&sThree.is(':hidden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':hidden')&&sFour.is(':hidden'))
            {
                scFour.show(4000);
            }
            else if(scFive.is(':hidden')&&sFive.is(':hidden'))
            {
                scFive.show(4000);
            }
            else if(scSix.is(':hidden')&&sSix.is(':hidden'))
            {
                scSix.show(4000);
            }
            else
            {
                scSeven.show(4000);
            }
        
        }    
    });
    
    $("#six>td:nth(2)").one("click",function(){
        if(sNine.is(':hidden') && scNine.is(':hidden'))
        {
            sNine.show(1000);
            if(scThree.is(':hidden')&& sThree.is(':hidden'))
            {
                scThree.show(4000);
                
            }
            else if (scTwo.is(':hidden')&& sTwo.is(':hidden'))
            {
                scTwo.show(4000);
               
            }
            else if(scOne.is(':hidden')&&sOne.is(':hidden'))
            {
                scOne.show(4000);
                
            }
            else if(scFour.is(':hidden')&&sFour.is(':hidden'))
            {
                scFour.show(4000);
                
            }
            else if(scFive.is(':hidden')&&sFive.is(':hidden'))
            {
                scFive.show(4000);
                
            }
            else if(scSix.is(':hidden')&&sSix.is(':hidden'))
            {
                scSix.show(4000);
                
            }
            else if(scSeven.is(':hidden')&&sSeven.is(':hidden'))
            {
                scSeven.show(4000);
                
                
            }
            else
            {
                scEight.show(4000);
            }
        }

    });

        /*if( scOne.is(':visible')===scTwo.is(':visible')===scThree.is(':visible'))
        {
         $(".com").html("ww");
        }
        else
        {
           $(".com").html("mm"); 
        }*/
       
    });

   /*if( $(".computer").is(':visible'))
   {
       if( scOne.is(':visible')==scTwo.is(':visible')==scThree.is(':visible'))
       {
        $(".com").html("ww");
       }
       else if ( scFour.is(':visible')==scFive.is(':visible')==scSix.is(':visible') )
       {
         $(".com").html("yy");
       }
       else if( scFive.is(':visible')==scSix.is(':visible')==scSeven.is(':visible') )
       {
            $(".com").html("pp");
       }
   }

    /*if( sOne.is(':visile') == sFour.is(':visible') )
    {
        scSeven.show(4000);
    }*/
    
    /*if( scThree.is(':visible')==scSix.is(':visible')==scNine.is(':visible'))
    {
        
        $(".com").html("win"+"+="+1);
    }
    
   // $(".com").text("kkk");
    /*
            if(scTwo.is(':hidden')&&sTwo.is(':hidden'))
            {
                scTwo.show(4000);
            }
            else if(scThree.is(':hiiden')&&sThree.is(':hiiden'))
            {
                scThree.show(4000);
            }
            else if(scFour.is(':visible')&&sFour.is(':visible'))
            {
                scFive.show(4000);
            }
            else if(scFive.is(':visible')&&sFive.is(':visible'))
            {
                scSix.show(4000);
            }
            else if(scSix.is(':visible')&& sSix.is(':visible'))
            {
                scSeven.show(4000);
            }
            else if(scSeven.is(':visible') && sSeven.is(':visible'))
            {
                scEight.show(4000);
            }
            else if(scEight.is(':visible')&& sEight.is(':visible'))
            {
                scNine.show(4000);
            }  
        }
        else
        {
            scNine.show(4000);
        }
    });
    
     
    $("#four>td:nth(1)").one("click",function(){
        if(sTwo.is(':hidden') && scTwo.is(':hidden'))
            {
                sTwo.css("display","block");
                if(scThree.hide()||sThree.hide())
                {
                    scThree.show(4000);
                }
                else if(scThree.show()||sThree.show())
                {
                   scFour.show(4000);
                   //scTwo.hide();
                   //sThree.hide();
                }
                else if(scFour.show()||sFour.show())
                {
                    scFive.show(4000);
                }
                else if(scFive.show()||sFive.show())
                {
                    scSix.show(4000);
                }
                else if(scSix.show()||sSix.show())
                {
                    scSeven.show(4000);
                }
                else if(scSeven.show()||sSeven.show())
                {
                    scEight.show(4000);
                }
                else if(scEight.show()||sEight.show())
                {
                    scNine.show(4000);
                }
            }
            else
            {
                //sTwo.hide();
                //scThree.hide();
            
            }
    });
    
    
        /*else if (scTwo.show()||sTwo.show())
        {
            
            scThree.show(4000);
        }
        else if (scThree.show()||sThree.show())
        {
            scFour.show(4000);
        }
        else if (scFour.show()||sFour.show())
        {
            scFive.show(4000);
        }
        else if (scFive.show()||sFive.show())
        {
            scSix.show(4000);
        }
        else if (scSix.show()||sSix.show())
        {
            scSeven.show(4000);
        }
        else if (scSeven.show()||sSeven.show())
        {
            scEight.show(4000);
        }
        else
        {
            scNine.show(4000);
            sOne.hide();
        }
    });
    
    $("#four>td:nth(1)").one("click",function(){
        if(sTwo.hide()||scTwo.hide())
        {
            sTwo.show(1000);
            scThree.show(4000);
        }
        else if (scThree.show()||sThree.show())
        {
            scFour.show(4000);
        }
        else if (scFour.show()||sFour.show())
        {
            scFive.show(4000);
        }
        else if (scFive.show()||sFive.show())
        {
            scSix.show(4000);
        }
        else if (scSix.show()||sSix.show())
        {
            scSeven.show(4000);
        }
        else if (scSeven.show()||sSeven.show())
        {
            scEight.show(4000);
        }
        else if(scEight.show()||sEight.show())
        {
            scNine.show(4000);
        }
        else
        {
            scOne.show(4000);
        }
    });
    
    /*if(sTwo.hide()||scTwo.hide())
        {
            sTwo.show(1000);
            scThree.show(1000);
        }
            //$("span").remove("#sctwo");
            //$("#scthree").show(1000);
            /*if(sThree.show())
            {
                $("span").remove("#scthree");
                $("#scfour").show(1000);
                if(sFour.show())
                {
                    $("span").remove("#scfour");
                    $("#scfive").show(1000);
                    if(sFive.show())
                    {
                        $("span").remove("#scfive");
                        $("#scsix").show(1000);
                        if(sSix.show())
                        {
                            $("span").remove("#scsix");
                            $("#scseven").show(1000);
                            if(sSeven.show())
                            {
                               $("span").remove("#scseven");
                               $("#sceight").show(1000);
                               if(sEight.show())
                               {
                                $("span").remove("#sceight");
                                $("#scnine").show(1000);
                                
                               }
                            }
                        }
                    }
                }
            }
        }
        
    });
    
    /*$("#four>td:nth(1)").one("click",function(){
        $("#stwo").show(1000);
        $("#scthree").show(1000);
            if(sThree.show())
            {
                $("span").remove("#scthree");
                $("#scfour").show(1000);
                if(sFour.show())
                {
                    $("span").remove("#scfour");
                    $("#scfive").show(1000);
                    if(sFive.show())
                    {
                        $("span").remove("#scfive");
                        $("#scsix").show(1000);
                        if(sSix.show())
                        {
                            $("span").remove("#scsix");
                            $("#scseven").show(1000);
                            if(sSeven.show())
                            {
                               $("span").remove("#scseven");
                               $("#sceight").show(1000);
                               if(sEight.show())
                               {
                                $("span").remove("#sceight");
                                $("#scnine").show(1000);
                                if(sNine.not.show()||scNine.show())
                                {
                                    $("#scone").show(1000);
                                }
                               }
                            }
                        }
                    }
                }
            }
        
    });
    
    
    /*$("#four>td:nth(1)").one("click",function(){
        $("#stwo").show(1000);
        $("#scthree").show(1000);
        if(sThree.show())
        {
                $("span").remove("#scthree");
                $("#scfour").show(1000);
            if(sFour.show())
            {
                    $("span").remove("#scfour");
                    $("#scfive").show(1000);
                if(sFive.show())
                {
                        $("span").remove("#scfive");
                        $("#scsix").show(1000);
                    if(sSix.show())
                    {
                            $("span").remove("#scsix");
                            $("#scseven").show(1000);
                        if(sSeven.show())
                        {
                               $("span").remove("#scseven");
                               $("#sceight").show(1000);
                            if(sEight.show())
                            {
                                $("span").remove("#sceight");
                                $("#scnine").show(1000);
                                if(sNine.show())
                                {
                                    $("span").remove("#scnine");
                                    $("#scone").show(1000);
                                    if(sOne.show())
                                    {
                                       $("span").remove("#scone");
                                       $("#scone").show(1000);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    
    
    
    
    /*$("#four>td:nth(0)").one("click",function(){
        $("#sone").show(1000);
       $("#sctwo").show(1000);
       if(sTwo.show()||scTwo.show())
       {
            //$("span").remove("#sctwo");
            $("#scthree").show(1000);
            if(sThree.show()||scThree.show())
            {
                $("#scfour").show(1000);
                if(sFour.show()||scFour.show())
                {
                    $("#scfive").show(1000);
                    if(sFive.show()||scFive.show())
                    {
                        $("#scsix").show(1000);
                        if(sSix.show()||scSix.show())
                        {
                            $("#scseven").show(1000);
                            if(sSeven.show()||scSeven.show())
                            {
                                $("#sceight").show(1000);
                                if(sEight.show()||scEight.show())
                                {
                                    $("#scnine").show(1000);
                                    if(sNine.show()||scNine.show())
                                    {
                                        $("#sctwo").show(1000);
                                    }
                                }
                            }
                        }
                    }
                }
            }
       }
    });
    
    $("#four>td:nth(1)").one("click",function(){
        $("#stwo").show(1000);
        $("#scthree").show(1000);
            if(sThree.show()||scThree.show())
            {
                $("#scfour").show(1000);
                if(sFour.show()||scFour.show())
                {
                    $("#scfive").show(1000);
                    if(sFive.show()||scFive.show())
                    {
                        $("#scsix").show(1000);
                        if(sSix.show()||scSix.show())
                        {
                            $("#scseven").show(1000);
                            if(sSeven.show()||scSeven.show())
                            {
                                $("#sceight").show(1000);
                                if(sEight.show()||scEight.show())
                                {
                                    $("#scnine").show(1000);
                                    if(sNine.show()||scNine.show())
                                    {
                                        $("#scone").show(1000);
                                        if(sOne.show()||scOneOne.show())
                                        {
                                        //$("span").remove("#sctwo");
                                        $("#sctwo").show(1000);
                                        }   
                                    }
                                }
                            }
                        }
                    }
                }
            }
    });
    
    
    $("#four>td:nth(2)").one("click",function(){
        $("#sthree").show(1000);
       $("#scfour").one("show(1000)");
                if(sFour.show()||scFour.show())
                {
                    $("#scfive").show(1000);
                    if(sFive.show()||scFive.show())
                    {
                        $("#scsix").show(1000);
                        if(sSix.show()||scSix.show())
                        {
                            $("#scseven").show(1000);
                            if(sSeven.show()||scSeven.show())
                            {
                                $("#sceight").show(1000);
                                if(sEight.show()||scEight.show())
                                {
                                    $("#scnine").show(1000);
                                    if(sNine.show()||scNine.show())
                                    {
                                        $("#sctwo").show(1000);
                                    }
                                }
                            }
                        }
                    }
                }
    });
    
    /*$("#four>td:nth(0)").one("click",function(){
       $("#sone").show(1000);
       $("#sctwo").one("show(1000)");
       if(scTwo.show())
       {
            $("span").remove("#sctwo");
            $("#scthree").show(1000);
            if(scThree.show())
            {
               $("span").remove("#scthree");
               $("#scfour").show(1000);
               if(scFour.show())
               {
                    $("span").remove("scfour");
                    $("#scfive").show(1000);
                    if(scFive.show())
                    {
                        $("span").remove("#scfive");
                        $("#scsix").show(1000);
                        if(scSix.show())
                        {
                            $("span").remove("#scsix");
                            $("#scseven").show(1000);
                            if(scSeven.show())
                            {
                                $("span").remove("#scseven");
                                $("#sceight").show(1000);
                                if(scEight.show())
                                {
                                    $("span").remove("#sceight");
                                    $("#scnine").show(1000);
                                    if(scNine.show())
                                    {
                                        $("span").remow("#scnine");
                                    }
                                }
                            }
                        }
                    }
               }
            }
       }
    });*/
    
    
    /*$("#four>td:nth(1)").one("click",function(){
       $("#stwo").show(1000);
       $("#scfive").show(1000);
       if(scFive.show())
       {
        $("span").remove("#sfive");
       }
    });
    
    $("#four>td:nth(2)").one("click",function(){
       $("#sthree").show(1000);
       $("#scsix").show(1000);
       if(scSix.show())
       {
        $("span").remove("#ssix");
       }
    });
    
    /*FirstPlayer4.click(function(){
        $("#sfour").fadeIn(1000);
        });
    FirstPlayer5.click(function(){
        $("#sfive").fadeIn(1000,function(){$("#scone").fadeIn(2000);});
        });*/
    /*var s2=$("#sc")
    $("#five>td:nth(2)").one("click",function(){
        $("#ssix").show(1000);
        
        
        
    });
    
    FirstPlayer6.click(function(){
        $("#ssix").fadeIn(1000);
        });
    /*FirstPlayer7.click(function(){
        $("#sseven").fadeIn(1000);
        });
    FirstPlayer8.click(function(){
        $("#seight").fadeIn(1000);
        });
    
    FirstPlayer9.click(function(){
        $("#snine").fadeIn(1000,function(){$("#sceight").fadeIn(2000);});
        });
    /*if(FirstPlayer9.click(function()){
        $("#snine").fadeIn(1000);
    }*/
    /*if(FirstPlayer3.click(function(){
        $("#sthree").fadeIn(1000)})==FirstPlayer5.click(function(){
        $("#sfive").fadeIn(1000)==FirstPlayer7.click(function(){
        $("#sseven").fadeIn(1000))
        {alert(yeees);}*/
   /* if( $("#stwo").fadeIn(1000) )
    {alert("noo");} */
   
   
});