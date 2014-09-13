/**
 * Created by MaTeng on 2014/9/10.
 */
$(function () {
    $(".nav-filter li").on("click",function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
    })
});