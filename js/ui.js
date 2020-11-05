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
    function chap1(){
        $('#mask_chap1').css('width','100%').css('height','100vh');
        $('#mask_chap1').fadeTo("fast",.8);    
    }
    function chap7(){
        $('#mask_chap7').css('width','100%').css('height','110vh');
        $('#mask_chap7').fadeTo("fast",.8);    
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
    $('.btn_close,.lnb_menu a,#mask').click(function(){
        $('.menu-trigger').removeClass('active-8');
        $('.nav').animate({left:'-100%'},400,)
        $('#mask').hide(function(){
            u_wrapWindowByMask()      
        });
    });
    
    $('.btn_main').click(function(){
        var offset = $(".chapter1").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.btn_game_info').click(function(){
        var offset = $(".chapter2").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.synop').click(function(){
        var offset = $(".chapter2").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.btn_onair,.chap1_detail').click(function(){
        var offset = $(".chapter3").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
        
    });
    $('.btn_char').click(function(){
        var offset = $(".chapter4").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.btn_staff').click(function(){
        var offset = $(".chapter5").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.btn_music').click(function(){
        var offset = $(".chapter6").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    $('.btn_down_move').click(function(){
        var offset = $(".chapter7").offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    });
    

    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
    }
    jQuery.fn.center1 = function () {
        this.css("position","absolute");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
    }
    $('.chap1_video_sub').click(function(){
        $('#mask_chap1').show(function(){
            chap1();
            $('#mask_chap1,.chap1_video_sub_show div').click(function(){
                $('#mask_chap1').hide();
                $('.chap1_video_sub_show').hide();
            })
        });
        $('.chap1_video_sub_show').center()
        $('.chap1_video_sub_show').show();
    })
    
    $('.btn_chapter3_table_open').click(function(){
        $('.table_visible').slideDown();
    })
    
    $('.chap3_tit_on').click(function(){
        
        $('.chap3_pop').show().css('height','100vh').css('overflow-y','scroll')
        $('body').css('overflow','hidden')
        $('#mask').show(function(){
            $('#mask').fadeTo("fast",.8);    
            wrapWindowByMask();
            $('#mask,.chap3_pop_close_btn').click(function(){
                $('#mask').hide();
                $('.chap3_pop').hide();
                $('body').css('overflow','auto')
            })
        });
    })

    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.swiper-container1', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.swiper-container2', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li a").click(function () {
        $("ul.tabs li a").removeClass("on")
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("on")
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
        $('.chap4_wrap').css("background","url('images/images/bg_chap4_left.png') no-repeat")
    });

    $(".tab_content_chap5").hide();
    $(".tab_content_chap5:first").show();

    $("ul.tabs_chap5 li").click(function () {
        $("ul.tabs_chap5 li").removeClass("on")
        $(this).addClass("on")
        $(".tab_content_chap5").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    $('.btn_chapter5_open').click(function(){
        $('.chap5_pop_list').show().css('height','100vh').css('overflow-y','scroll')
        $('body').css('overflow','hidden')
        $('#mask,.chap5_pop_close_btn').click(function(){
            $('.chap5_pop_list').hide();
            $('body').css('overflow','auto')
        })
    })
    $(".tab_content_chap6").hide();
    $(".tab_content_chap6:first").show();
    $("ul.tabs_chap6 li").click(function () {
        $("ul.tabs_chap6 li").removeClass("on")
        $(this).addClass("on")
        $(".tab_content_chap6").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    $('.chap7_video_sub').click(function(){
        $('.chap7_video_sub_show').center1().show();
        $('#mask_chap7').show(function(){
            chap7();
            $('#mask_chap7,.chap7_video_sub_show div').click(function(){
                $('#mask_chap7').hide();
                $('.chap7_video_sub_show').hide();
            })
        });
    })
})