$(function() {
    $('body').on('click', data_behavior('scroll_to'), function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = href === '#top' ? 0 : href;
        $.scrollTo(target, 500, { offset: -80 });
    });
});