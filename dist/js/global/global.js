/**
 * Created by MaTeng on 2014/9/9.
 */

$(function () {
    $.ajax({
        url: "/WebTest/dist/template/global-template.html",
        dataType: "html"
    }).done(function (responseText) {
        var $response = $("<div>").append($.parseHTML(responseText));
        $('#header').html($response.find('#header-template').html());

        var category = window.location.pathname.split('/');
        if (category[category.length - 1] == 'index.html') {
            $('#index').addClass('active');
            $('#category-panel').removeClass('hide');
        } else {
            $('#' + category[category.length - 2]).addClass('active');
        }

        $('#footer').html($response.find('#footer-template').html());
    });
});