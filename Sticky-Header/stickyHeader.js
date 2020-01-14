// $(document).ready(function() {
//     console.log('ready');  
// });

// $(window).on('load', function() {
//     console.log('.on("load", function(){})');
// });

(function($) {
    var $window = $(window),
        header = $('.header_wrap'),
        gnb = $('.gnb'),
        content = $('.content');

    // init
    checkScrollTop();
    console.log('(function($){...})(jQuery)');

    gnb.children().on('click', function() {
        var idxContent = $(this).index() + 1;
        // gnb.children().removeClass('on');
        // $(this).addClass('on');
        aniScrollTop($('#content' + idxContent));
        // console.log('offset(): ', $('.test-in').offset());
        // console.log('position(): ', $('.test-in').position());
    });

    /* =============
        scroll
     =============== */
    $window.on('scroll', function() {
        checkScrollTop();
        checkScrollPosition($('html, body').scrollTop());
    });

    /* =============
        Function
     =============== */
    function checkScrollTop() {
        $window.scrollTop() > header.innerHeight() - 30 ? header.addClass('scroll') : header.removeClass('scroll');
    }

    function aniScrollTop(_content) {
        var calcTop = _content.offset().top - header.innerHeight();

        if(!header.hasClass('scroll')) {
            calcTop = _content.offset().top - (header.innerHeight() * 2);
        }

        $('html, body').animate({
            scrollTop: calcTop
        }, 500);
    }

    function checkScrollPosition(_pos) {
        var crtScrTop = _pos,
            arrOffsetTop = [],
            arrOffsetTopLeng = 0;
            
        content.each(function(idx) {
            idx == 0 ? arrOffsetTop.push(0) : arrOffsetTop.push($(this).offset().top - header.innerHeight() - 5);
        });

        arrOffsetTopLeng = arrOffsetTop.length - 1;
        for(var i = 0; i <= arrOffsetTopLeng; i++) {
            if((i != arrOffsetTopLeng && crtScrTop >= arrOffsetTop[i] && crtScrTop < arrOffsetTop[i+1]) || (i == arrOffsetTopLeng && crtScrTop > arrOffsetTop[arrOffsetTopLeng])) {
                    gnb.children().removeClass('on').eq(i).addClass('on');
            }
        }
    }
})(jQuery);

// (function($){
//     console.log('(function($){...}(jQuery))');
// }(jQuery));