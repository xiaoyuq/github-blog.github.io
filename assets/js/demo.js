/**
 * Created by Xiaodong on 2016/3/9.
 */
$(document).ready(function(){
   var $scroll= $(window).scroll(function(){
        var aa=$(window).scrollTop();
        var bb=$(".jumbotron").parent().height();
        if ($(window).scrollTop()==0){
            $(".nav-left").css("top",bb);
        }else if ($(window).scrollTop()>=343){
            $(".nav-left").css("top",50);
        } else {
            $(".nav-left").css("top",bb-aa);
        }


    });
    $(window).resize(function(){
        $(window).scrollTop($(window).scrollTop()+1);
        $scroll();
    });
});
