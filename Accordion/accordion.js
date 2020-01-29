var arccordion = function(_target, _option) {
    var $target = $(_target),
        $this = '';
    
    run();

    function run() {
        $target.find('button').on('click', function() {
            $this = $(this);
            checkOption();
        });
    }

    function addOnClass() {
        var parent = $this.parent();
        parent.siblings().removeClass('on');
        parent.hasClass('on') ? parent.removeClass('on') : parent.addClass('on');
    }

    function arrcordionFunc() {
        if($this.next().css('display') == 'block') {
            $this.next().slideUp();
        } else {
            $this.next().slideDown();
        }
    }

    function checkOption() {
        if(_option == 'single') {
            addOnClass();
        } else if (_option == 'multi') {
            arrcordionFunc();
        } else {
            console.log('Error :: please check your option.');
        }
    }
};

arccordion('.bx_accordion', 'multi');
arccordion('.bx_accordion2', 'single');