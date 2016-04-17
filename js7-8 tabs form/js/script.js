$(document).ready(function() {
        $('.tabs a').on('click', function(e) {
        e.preventDefault();

        var tabId = $(this).attr('href');

        $('.tabs a').removeClass('active');
        $(this).addClass('active');

        $('.js-tab').removeClass('tab-active');
        $(tabId).addClass('tab-active');
    });
// Form
    $('input').on('mouseenter', function(){
        $(this).siblings('span').animate({opacity:'show'},'slow')
    });
    $('input').on('mouseleave', function(){
        $(this).siblings('span').hide();
    });
    $('button').on('click', function(e){
        e.preventDefault();
        $('span').show()
    })
});
