/**
 * Created by janghunlee on 2017. 11. 14..
 */

$(".login-choose-btn").click(function () {
    $(".login-box").css({
        "display":"block"
    });

    $(".register-box").css({
        "display":"none"
    });
});

$(".register-choose-btn").click(function () {
    $(".login-box").css({
        "display":"none"
    });

    $(".register-box").css({
        "display":"block"
    });
});