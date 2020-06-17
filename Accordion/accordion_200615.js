;(function($) {
    'use strict';

    var arccordion = function(_target, _option) {
        var $target = $(_target),
            _option = _option == undefined ? 'single' : _option;
        
        // run (click)
        $target.find('button').on('click', function() {
            var _this = $(this);
            checkOption(_this);
        });

        /* ==========
            Function
         ============*/
        function addOnClass($this) {
            var _parent = $this.parent();
            _parent.siblings().removeClass('on');
            _parent.hasClass('on') ? _parent.removeClass('on') : _parent.addClass('on');
        }
        function arrcordionFunc($this) {
            if($this.next().css('display') == 'block') {
                $this.next().slideUp();
            } else {
                $this.next().slideDown();
            }
        }
        function checkOption($this) {
            _option == 'multi' ? arrcordionFunc($this) : addOnClass($this);
        }
    };

    arccordion('.bx_accordion', 'multi');
    arccordion('.bx_accordion2');
})(jQuery);