/**
 * Created by MaTeng on 2014/9/10.
 */
$(function () {
    // 老版本使用
    $(".nav-filter li").on("click",function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
    });
    // 新版本使用
    $(".nav-pills li").on("click",function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
    });
});