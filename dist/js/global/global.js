/**
 * Created by MaTeng on 2014/9/9.
 */

$(function () {
    $('#header').load('/WebTest/dist/template/header-template.html #header', function () {
        var category = window.location.pathname.split('/');
        if (category[2] == 'index.html') {
            $('#index').addClass('active');
            $('#category-panel').removeClass('hide');
        } else {
            $('#' + category[2]).addClass('active');
        }
    });

    $('#footer').load('/WebTest/dist/template/footer-template.html #footer');
});