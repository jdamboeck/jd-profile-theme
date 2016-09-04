$(document).ready(function() {
    $(function() {
        $('.start').addClass('active');
        $('#jd-nav-top a').click(function() {
            $('#jd-nav-top li').removeClass('active');
            $(this).closest('li').addClass('active');
        });
    });
});
