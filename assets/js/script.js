$(document).ready(function(){
    $('a').click(function(){
        $('a').css('background-color', '#fff');
        $('a').css('border-bottom','0');
        $('.hide').hide();
        $(this).css('padding-bottom', '5px');
        $(this).css('border-bottom','solid 2px');
        var section = '#' + $(this).text();
        $(section).fadeIn();
    });
});