;(function($) {
    'use strict';
    
    var kSticky = (function() {
        var header = $('.header_wrap'),
            gnb = header.find('.gnb'),
            content = $('.content');
        
        // init
        crtPos(0);
    
        /* =============
            scroll
         =============== */
        $(window).on('scroll', function(){
            if($('html, body').scrollTop() > header.innerHeight()) {
                crtPos(500);
            }
        });
    
        gnb.find('li').on('click', function() {
            aniScroll($(this).index());
        });
    
        /* =============
            Function
         =============== */
        function fixHeader() {
            header.removeClass('scroll');
            if(!header.hasClass('scroll') && header.innerHeight() < $(window).scrollTop()) {
                header.addClass('scroll');
            }
        }
        function crtPos(_delay) {
            setTimeout(function() {
                var crtIdx = parseInt($(window).scrollTop() / content.height());
                gnb.find('li').removeClass('on').eq(crtIdx).addClass('on');
            }, _delay);
            fixHeader();
        }
        function aniScroll(_idx) {
            var scrTop = header.hasClass('scroll') ? content.eq(_idx).offset().top - header.innerHeight() : content.eq(_idx).offset().top;
            
            $('html, body').animate({
                scrollTop: scrTop
            }, 500);
        }
    }());
})(jQuery);