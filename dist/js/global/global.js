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
        });
    };

    global.getHeader = getHeader;
})(window);

$(function () {
    global.getHeader();
});
