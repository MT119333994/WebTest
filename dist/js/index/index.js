/**
 * Created by MaTeng on 2014/9/10.
 */

$(function () {
//    $(".floor-title .floor-title-tab").on("mouseover", "a", function () {
//        $(this).parent().addClass("active").siblings(".active").removeClass("active");
//    });

    $("#fc-category-tab").on("mouseenter", "li", function () {
        $(this).addClass("selected").siblings(".selected").removeClass("selected");
        var animateDisplace;
        var selectedIndex = $(this).index();
        switch (selectedIndex) {
            case 0 :
                animateDisplace = "0";
                break;
            case 1 :
                animateDisplace = "-250px";
                break;
            case 2 :
                animateDisplace = "-500px";
                break;
            case 3 :
                animateDisplace = "-750px";
                break;
            case 4 :
                animateDisplace = "-1000px";
                break;
            default :
                animateDisplace = "0";
        }
        $(".fc-category-wrapper").animate({"top": animateDisplace}, {"speed": "500", "queue": false});
    });
});