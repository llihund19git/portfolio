//<!-- Scroll TOP

$(document).on('click','.scroll_top',function(){
    $('body,html').animate({scrollTop:0},400);
    return false;
})

$(window).scroll(function(){
    /* Show hide scrolltop button */
    if( $(window).scrollTop() == 0 ) {
        $('.scroll_top').stop(false,true).fadeOut(600);
    }else{
        $('.scroll_top').stop(false,true).fadeIn(600);
    }
    /* Main menu on top */
    var h = $(window).scrollTop();
    var max_h = $('#header').height() + $('#top-banner').height();
    var width = $(window).width();
    if(width > 767){
        if( h > (max_h + vertical_menu_height)-50){
            // fix top menu
            $('#nav-top-menu').addClass('nav-ontop');
            //$('#nav-top-menu').find('.vertical-menu-content').hide();
            //$('#nav-top-menu').find('.title').removeClass('active');
            // add cart box on top menu
            $('#cart-block .cart-block').appendTo('#shopping-cart-box-ontop .shopping-cart-box-ontop-content');
            $('#shopping-cart-box-ontop').fadeIn();
            $('#user-info-top').appendTo('#user-info-opntop');
            $('#header .header-search-box form').appendTo('#form-search-opntop');
        }else{
            $('#nav-top-menu').removeClass('nav-ontop');
            if($('body').hasClass('home')){
                $('#nav-top-menu').find('.vertical-menu-content').removeAttr('style');
                if(width > 1024)
                    $('#nav-top-menu').find('.vertical-menu-content').show();
                else{
                    $('#nav-top-menu').find('.vertical-menu-content').hide();
                }
                 $('#nav-top-menu').find('.vertical-menu-content').removeAttr('style');
            }
            ///
            $('#shopping-cart-box-ontop .cart-block').appendTo('#cart-block');
            $('#shopping-cart-box-ontop').fadeOut();
            $('#user-info-opntop #user-info-top').appendTo('.top-header .container');
            $('#form-search-opntop form').appendTo('#header .header-search-box');
        }
    }
});
var vertical_menu_height = $('#box-vertical-megamenus .box-vertical-megamenus').innerHeight();
//Scroll TOP -->