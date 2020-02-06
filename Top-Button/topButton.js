(function($) {
    var $window = $(window),
        header = $('.header_wrap'),
        gnb = $('.gnb'),
        content = $('.content'),
        setTime = null,
        flag = false,
        top = $('.top');

    // init
    checkScrollTop();
    gnb.children().on('click', clickGnb);

    // Top Button
    top.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    /* =============
        scroll
     =============== */
    $window.on('scroll', function() {
        var arrPosSection = [],
            flag = true,
            calcBottom  = $('html, body').innerHeight() - $(window).innerHeight() - $('footer').innerHeight();

        checkScrollTop();
        checkScrollPosition($('html, body').scrollTop());

        // position of Top Button
        if($('html, body').scrollTop() > calcBottom) {
            top.css('bottom', $('html, body').scrollTop() - calcBottom + 30);
        } else {
            top.css('bottom', '');
        }
    });

    /* =============
        Function
     =============== */
     function clickGnb() {
        var idxContent = $(this).index() + 1;
        flag = true;
        aniScrollTop($('#content' + idxContent), 500);
        gnb.children().removeClass('on');
        $(this).addClass('on');
    }
    function checkScrollTop() {
        $window.scrollTop() > header.innerHeight() - 30 ? header.addClass('scroll') : header.removeClass('scroll');
    }

    function aniScrollTop(_content, _speed) {
        var calcTop = _content.offset().top - header.innerHeight();

        if(!header.hasClass('scroll')) {
            calcTop = _content.offset().top - (header.innerHeight() * 2);
        }

        $('html, body').animate({
            scrollTop: calcTop
        }, _speed);

        if(setTime != null) {
            clearTimeout(setTime);
        }
        setTime = setTimeout(function() {
            flag = false;
        }, _speed);
    }

    function checkScrollPosition(_pos) {
        var crtScrTop = _pos,
            arrOffsetTop = [],
            arrOffsetTopLeng = 0;
            
        content.each(function(idx) {
            idx == 0 ? arrOffsetTop.push(0) : arrOffsetTop.push($(this).offset().top - header.innerHeight() - 5);
        });

        arrOffsetTopLeng = arrOffsetTop.length - 1;
        if(flag == false) {
            for(var i = 0; i <= arrOffsetTopLeng; i++) {
                if((i != arrOffsetTopLeng && crtScrTop >= arrOffsetTop[i] && crtScrTop < arrOffsetTop[i+1]) || (i == arrOffsetTopLeng && crtScrTop > arrOffsetTop[arrOffsetTopLeng])) {
                    gnb.children().removeClass('on').eq(i).addClass('on');
                }
            }
        }
    }
})(jQuery);