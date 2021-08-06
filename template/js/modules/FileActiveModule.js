export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    function rpLogin() {
        const width = $(window).width();
        if (width < 768 && $('.header-login').length) {

            const $logs = $('.login-box');

            $(document).mouseup(function (e) {
                if (!$logs.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                    && $logs.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                {
                    $logs.removeClass('active');
                }
            });

            $('.login-icon').on('click', function () {
                $logs.toggleClass('active');
            });
        }
    }

    rpLogin();

    $(window).on('resize', function () {
        rpLogin();
    });
}