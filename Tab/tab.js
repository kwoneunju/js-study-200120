(function($){
    var tab= $('.tab'),
        tabBox = $('.tab_box');

    /* ==================
        구조 1.
     ==================== */
    // index() 사용
    tab.children().on('click', function() {
        var idx = $(this).index();
        tab.children().removeClass('on');
        $(this).addClass('on');
        tabBox.hide().eq(idx).fadeIn();
    });

    // index() 미사용

    /* ==================
        구조 2.
     ==================== */
    var tab2= $('.tab2'),
        tabBox2 = $('.tab_box2');

    tab2.children().on('click', function() {
        tabBox2.hide();
        tab2.children().removeClass('on');
        $(this).addClass('on').find('.tab_box2').show();
    });


    /* ==================
        tab 2개 이상일 경우
     ==================== */
    var tab3 = $('.tab3'),
        tabBox3 = $('.tab_box3');
        
    // 수정 필요.
    // tab3.each(function(idx) {
    //     var $this = $(this);
    //     $this.children().on('click', function() {
    //         var idx = $(this).index();
    //         $this.children().removeClass('on');
    //         $(this).addClass('on').parent().siblings().hide().eq(idx).fadeIn();
    //     });
    // });

    tab3.find('button').on('click', function() {
        var $this = $(this),
            index = $this.parent().index();

        $this.parent().siblings().removeClass('on').closest(tab3).siblings(tabBox3).hide();
        $this.parent().addClass('on').closest(tab3).siblings(tabBox3).eq(index).show();
    });
})(jQuery);