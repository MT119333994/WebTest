/**
 * Created by MaTeng on 2014/9/10.
 */

$(function () {
    $(".floor-title .floor-title-tab").on("mouseover", "a", function () {
        $(this).parent().addClass("active").siblings(".active").removeClass("active");
    });
});