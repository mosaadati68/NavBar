$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $(".sub-header").addClass('active')
        } else {
            $(".sub-header").removeClass('active')
        }
    })
});
