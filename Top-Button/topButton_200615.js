;(function($) {
    'use strict';
    
    var kSticky = (function() {
        var header = $('.header_wrap'),
            gnb = header.find('.gnb'),
            content = $('.content'),
            _top = $('.top');
        
        // init
        crtPos(0);
    
        /* =============
            click
        =============== */
        // Top Button
        _top.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            });
        });

        /* =============
            scroll
         =============== */
        $(window).on('scroll', function(){
            crtPos(500);
            fixBtnTop();
        });
    
        gnb.find('li').on('click', function() {
            aniScroll($(this).index());
        });
    
        /* =============
            Function
         =============== */
        function fixBtnTop() {
            var _doc = $('html, body'),
                _winHeight = $(window).innerHeight(),
                _footHeight = $('footer').innerHeight(),
                _crtScrTop = _doc.scrollTop(),
                _maxScrTop = _doc.innerHeight() - _winHeight - _footHeight;

            _crtScrTop < _maxScrTop ? _top.css('bottom', '50px') : _top.css('bottom', 50 + (_crtScrTop - _maxScrTop) + 'px');
        }
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
            var scrTop = header.hasClass('scroll') ? content.eq(_idx).offset().top + header.innerHeight() : content.eq(_idx).offset().top - header.innerHeight();

            $('html, body').animate({
                scrollTop: scrTop
            }, 500);
        }
    }());
})(jQuery);