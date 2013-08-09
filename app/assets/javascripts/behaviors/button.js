$(function() {
    $('body').on('click', data_behavior('button'), function() {
        $(this).button('loading');
    });
    Behavior.button = {};
    Behavior.button.reset_all = function() {
        $(data_behavior('button')).button('reset');
    };
});