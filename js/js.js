
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });
    $('button').addClass('btn-primary').text('Switch to Orange Tab');
    $('button').click(function(){
      $('#tabs a[href=#orange]').tab('show');
    });
