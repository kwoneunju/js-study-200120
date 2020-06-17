;(function($) {
    'use strict';

    var kTab = (function(){
        var tabArea = $('.tab_area'),
            tabMenu = tabArea.find('ul').find('li');
        
        // run (click)
        tabMenu.on('click', function() {
            var $this = $(this),
                index = $this.index();

            changeTabMenu($this);
            changeTabContent($this, index);
        });
        
        /* ==========
            Function
         ============*/
        function changeTabMenu($target) {
            $target.addClass('on').siblings().removeClass('on');
        }

        function changeTabContent($target, $index) {
            var _condtion = $target.children('div').attr('class') == undefined,
                _crtClassName = _condtion ? $target.closest('.tab_area').find('div').attr('class') : $target.children('div').attr('class');
            
            $target.closest('.tab_area').find('.' + _crtClassName).hide();
            
            if(_crtClassName) {
                $target.closest('.tab_area').find('.' + _crtClassName).eq($index).show();
            } else {
                $target.find('.' + _crtClassName).show();
            }
        }
    }());
})(jQuery);