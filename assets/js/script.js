$(document).ready(function(){
    $('a').click(function(){
        $('a').css('background-color', '#fff');
        $('a').css('border-bottom','0');
        $('.hide').hide();
        $(this).css('padding-bottom', '5px');
        var section = $(this).attr('href');
        $(section).fadeIn();
    });
});