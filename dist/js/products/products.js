$(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 70) {
            $(".promotion-nav").addClass("promotion-nav-fixed");
        } else {
            $(".promotion-nav").removeClass("promotion-nav-fixed");
        }
    });

    $(".promotion-nav .promotion-nav-item").on("click", function () {
        $(this).parent().toggleClass("selected").siblings(".selected").removeClass("selected");
    });

    $(".promotion-list").on("mouseover", "a", function(){
        $(this).addClass("item-link-hover");
    }).on("mouseout", "a", function(){
        $(this).removeClass("item-link-hover");
    });

    $("#product-detail .tab li").on("click",function(){
        $(this).addClass("curr").siblings().removeClass("curr");
        $("#"+$(this).attr("data-target")).show().siblings().hide();
    })
});