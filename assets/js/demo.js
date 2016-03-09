/**
 * Created by Xiaodong on 2016/3/9.
 */
$(document).ready(function(){
    $(window).scroll(function(){
        var aa=$(window).scrollTop();
        if ($(window).scrollTop()==0){
            $(".nav-left").css("top",393);
        }else if ($(window).scrollTop()>=343){
            $(".nav-left").css("top",50);
        } else {
            $(".nav-left").css("top",393-aa);
        }


    });
});
