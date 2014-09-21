/**
 * Created by MaTeng on 2014/9/9.
 */

(function (window) {
    // ȫ�ֶ���
    var global = window.global = {};

    // �¾�Ƥ��ģ��URL
    var headerTemplateUrl = {
        urlNew: "/WebTest/dist/template/global-template-20140921.html",
        urlOld: "/WebTest/dist/template/global-template.html"
    };

    // ��ȡͷ����ҳ��ģ��
    var getHeader = function () {
        var skinType = window.sessionStorage.getItem("index-skin-type");
        var url;
        if (skinType == null || skinType == "") {
            url = headerTemplateUrl.urlNew;
        } else if (skinType == "new") {
            url = headerTemplateUrl.urlOld
        } else {
            url = headerTemplateUrl.urlNew;
        }

        $.ajax({
            url: url,
            dataType: "html",
            async: false
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

            $('.change-skin').on('click', function () {
                changeSkin();
                window.location.reload();
            });

            $('#footer').html($response.find('#footer-template').html());
        });
    };

    // �л�Ƥ������
    var changeSkin = function () {
        var skinType = window.sessionStorage.getItem("index-skin-type");
        if (skinType == null || skinType == "") {
            window.sessionStorage.setItem("index-skin-type", "new");
        } else if (skinType == "new") {
            window.sessionStorage.setItem("index-skin-type", "old");
        } else {
            window.sessionStorage.setItem("index-skin-type", "new");
        }
    };

    global.getHeader = getHeader;
})(window);

$(function () {
    global.getHeader();
});
