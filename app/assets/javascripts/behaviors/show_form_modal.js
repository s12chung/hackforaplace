$(function() {
    $(data_behavior('show_form_modal')).on('hidden.bs.modal', function() {
        $('#modal').modal('show');
    });
});