/**
 * Created by Xiaodong on 2016/3/9.
 */
$(document).ready(function () {
    var $scroll = $(window).scroll(function () {
        var aa = $(window).scrollTop();
        var bb = $(".jumbotron").parent().height();
        if ($(window).scrollTop() == 0) {
            $(".nav-left").css("top", bb);
        } else if ($(window).scrollTop() >= 343) {
            $(".nav-left").css("top", 50);
        } else {
            $(".nav-left").css("top", bb - aa);
        }


    });
    $(window).resize(function () {
        $(window).scrollTop($(window).scrollTop() + 1);
        $scroll();
    });
});

/**
 * 挑逗效果
 * @param id 标签id
 * @returns {boolean}
 */
function little_shake(id) {
    $("#" + id).css({
        "animation": "my-little-shake .5s ease-in-out 1",
        "animation-play-state": "running"
    });
    setTimeout(function () {
        $("#" + id).css({
            "animation": "",
            "animation-play-state": ""
        });
    }, 500);
    return false;
}
