/**
 * Created by MaTeng on 2014/9/10.
 */

$(function () {
    $.ajax({
        url: "/WebTest/dist/template/global-about-template.html",
        dataType: "html"
    }).done(function (responseText) {
        var $response = $("<div>").append($.parseHTML(responseText));
        $('#about-nav-l-nav').html($response.find('#about-l-nav-template').html());

        var category = window.location.pathname.split('/');
        var file = category[category.length - 1];
        var fileName = file.substr(0, file.indexOf('.'));

        $('#' + fileName).addClass('active');
    });
});