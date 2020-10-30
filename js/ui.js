$(document).ready(function(){
    // 헤더 스크롤 이벤트
	window.onscroll = function(){
		if($(document).scrollTop() > 1){
            $("header").css('background','#1e150f');
            
		}else{
            $("header").css('background','none');
        }
    }
    function wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
		
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
		
        $('#mask').fadeTo("slow");    
        
    }
    function u_wrapWindowByMask(){
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
        $('#mask').css({'width': '0','height': '0'});  
        $('#mask').fadeTo("slow",0.7);    
    }
    var burger = $('.menu-trigger');
    burger.each(function(index){
        var $this = $(this);
        $this.on('click', function(e){
            e.preventDefault();
            $(this).addClass('active-8');
            if($(this).hasClass('active-8')){
                $('.nav').animate({left:'0'},400);
                e.preventDefault();
                $('#mask').show(function(){
                    wrapWindowByMask()
                });
            }   
           
        })
    });
    $('.btn_close,.lnb_menu a').click(function(){
        $('.menu-trigger').removeClass('active-8');
        $('.nav').animate({left:'-100%'},400,)
        $('#mask').hide(function(){
            u_wrapWindowByMask()      
        });
    })
})