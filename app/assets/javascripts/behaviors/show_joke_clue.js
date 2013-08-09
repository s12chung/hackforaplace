$(function() {
    $(data_behavior('joke_clue')).tipsy({trigger: 'manual', gravity: 'n'});
    $(data_behavior('show_joke_clue')).on('click', function() {
        $(data_behavior('joke_clue')).tipsy('show');
    });
});