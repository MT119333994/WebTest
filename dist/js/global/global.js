/**
 * Created by MaTeng on 2014/9/9.
 */

(function (window) {
    // ȫ�ֶ���
    var global = window.global = {};

    // ��ȡͷ����ҳ��ģ��
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
