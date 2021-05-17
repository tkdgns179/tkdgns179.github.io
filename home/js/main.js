$(document).ready(function(){
    $('.to_top a').smoothScroll();

    $('.openMOgnb').click(function(){
        // debug : alert('메뉴 보이기 클릭 액션');
        // $('.header_cont').css('display', 'block')
        $('.header_cont').slideDown("slow");
        $('#header').addClass('on');
    });
    $('.closePop').click(function(){
        // $('.header_cont').css('display', 'none')
        $('.header_cont').slideUp("fast");
        $('#header').removeClass('on');
    });
    
});
