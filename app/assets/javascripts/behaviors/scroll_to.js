$(function() {
    $('body').on('click', data_behavior('scroll_to'), function(e) {
        e.preventDefault();
        $.scrollTo($(this).attr('href'), 500, { offset: -80 });
    });
});