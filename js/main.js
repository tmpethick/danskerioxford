$(document).ready(function() {
    var setHash = function(hash){
        if(history.pushState) {
            history.pushState(null, null, hash);
        } else {
            window.location.hash = hash;
        }
    };
    $(".scroll").click(function(event){
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        setHash(this.hash);
        return false;
    });

    $('.scroll-to').each(function(i) {
        var position = $(this).position();
        $(this).scrollspy({
            min: position.top,
            max: position.top + $(this).height(),
            onEnter: function(element, position) {
                var hash = '#' + element.id;
                $('a[href="'+ hash +'"]').addClass('focus');
            },
            onLeave: function(element, position) {
                var hash = '#' + element.id;
                $('a[href="' + hash +'"]').removeClass('focus');
            }
        });
    });
    $(document).on('touchstart', function(){
        $('#nav .active').removeClass('active');
    });
    $('#nav >ul >li').on('touchend', function(e){
        e.stopPropagation();
        var elem = $(this);
        if(elem.is('.active')){
            elem.removeClass('active');
        }else{
            $('#nav .active').removeClass('active');
            elem.addClass('active');
        }
    });
    $('#nav >ul >li >a').on('touchstart', function(e){
        if ($(this).parent().is('.active')){
            return true;
        } else {
            return false;
        }
    });
});
