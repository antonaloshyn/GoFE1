//carousel
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });

//accordion
$(".accordion h4").click(function(){
        $(this).next("p").stop().slideToggle("slow").siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h4").removeClass("active");
    });
})(jQuery);



