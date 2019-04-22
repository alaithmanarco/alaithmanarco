/*global $, jquery, alert, console*/

$(function(){
    "use strict";
    // Nice Scroll
    $("html").niceScroll();

    

//show color option div when click on the gear

    $(".gear-check").click(function(){
        $(".color-option").fadeToggle(1500);
    });

    var colorLi = $(".color-option ul li")

    colorLi
    .eq(0).css("background-color","#e41b17").end()
    .eq(1).css("background-color","rgb(41, 22, 211)").end()
    .eq(2).css("background-color","rgb(131, 228, 107)").end()
    .eq(3).css("background-color","rgb(35, 197, 247)").end()
    .eq(4).css("background-color","rgb(241, 212, 81)");


    colorLi.click(function(){
        $("link[href*='theam']").attr("href",$(this).attr("data-value"));
    });

    $( window ).ready(function() {
   
        
        $(".loding-overlay h1,.lds-spinner").fadeOut(2000,function(){
            $("body").css("overflow","auto");
            $(".loding-overlay").fadeOut(2000,function(){
                    $(".loding-overlay").remove();
                });
        });
       
        
        
    });


    // scroll top
    var scroltop=$("#scroll-top");

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 1500){
            scroltop.show();
        } else {
            scroltop.hide();
        }

    });
    scroltop.click(function(){
        $("html,body").animate({scrollTop : 0}, 600);
    });

});