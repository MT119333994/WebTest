$(function () {
    // 老版本使用
    $(".nav li").on("click",function(){
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
    });
});