/**
 * Created by MaTeng on 2014/9/9.
 */

(function (window) {
    // 全局对象
    var global = window.global = {};

    // 获取头部和页脚模板
    var getHeader = function () {
        $.ajax({
            url: "/WebTest/dist/template/global-template-20140921.html",
            dataType: "html",
            async: false
        }).done(function (responseText) {
            var $response = $("<div>").append($.parseHTML(responseText));
            $('#header').html($response.find('#header-template').html());
            $('#footer').html($response.find('#footer-template').html());

            var category = window.location.pathname.split('/');
            if (category[category.length - 1] == 'index.html') {
                $('#index').children('a').addClass('logo-color');
            } else {
                console.log(category[category.length - 2]);
                $('#' + category[category.length - 2]).children('a').addClass('logo-color');
            }
        });
    };

    global.getHeader = getHeader;
})(window);

$(function () {
    global.getHeader();
});
