$(document).ready(function() {
    $(function() {
        $('.start').addClass('active');
            $('.navigation a').click(function() {
            $('.navigation a').removeClass('active');
            $(this).addClass('active');
       });
    });
});
