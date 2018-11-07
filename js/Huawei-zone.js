/*
* @Author: admin
* @Date:   2018-09-08 11:26:03
* @Last Modified by:   admin
* @Last Modified time: 2018-09-25 18:49:29
*/
// function aa(){
	var num=0;
	var timer;
	var numb=0;
	//banner
	function go(){
		timer=setInterval(function(){
			numb++
			if(numb>10)numb=0;
			$('.box li').eq(numb).fadeIn(200).siblings('li').css('display','none');
			$('.list li').eq(numb).addClass('current').siblings('.list li').removeClass('current')
		},1000)
	}
	$('.banner').hover(function(){
		clearInterval(timer);
	},
	function(){
		go();
	})
	$('.list li').mouseenter(function(){
		$(this).addClass('current').siblings('.list li').removeClass('current')
		numb=$(this).index()
		$('.box li').eq(numb).stop().fadeIn(200).siblings('.box li').css('display','none');
	})
	//轮播
	$('.ph-left').click(function(){
		if($(this).siblings('.phone-lis').css('left')=='0px'){
				$(this).css('cursor','not-allowed')
		}else{
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.phone-lis').css('left')!='0px'){
				$(this).siblings('.phone-lis').animate({'left':'0px'},500).css('right','auto')
		}
	})
	$('.ph-right').click(function(){
		if($(this).siblings('.phone-lis').css('right')=='0px'){
				$(this).css('cursor','not-allowed')
		}else{
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.phone-lis').css('right')!='0px'){
				$(this).siblings('.phone-lis').animate({'right':'0px'},500).css('left','auto')
		}
	})
	$('.ph-left').mouseenter(function(){
		if($(this).siblings('.phone-lis').css('left')!='0px'){
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.phone-lis').css('left')=='0px'){
			$(this).css('cursor','not-allowed')
		}
	})
	$('.ph-right').mouseenter(function(){
		if($(this).siblings('.phone-lis').css('right')!='0px'){
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.phone-lis').css('right')=='0px'){
			$(this).css('cursor','not-allowed')
		}
	})
	// 侧边栏
			var ss1=$('.phone').offset().top-200
			var ss2=$('.laptop').offset().top-200
			var ss3=$('.slab').offset().top-200
			var ss4=$('.smart').offset().top-200
			var ss5=$('.parts').offset().top-200
			var ss6=$('.slogan-container').offset().top-200
		$(window).scroll(function(event) {
			console.log($(window).scrollTop())
			if($(window).scrollTop()>=ss1&&$(window).scrollTop()<=ss6){
				$('.sidebar').stop().animate({'right':'0px'},500)
			}else{
				$('.sidebar').stop().animate({'right':'-100px'},500)
			}
			if($(window).scrollTop()>=ss1){
				$('.sidebar li').eq(0).addClass('sid-list').siblings('').removeClass('sid-list')
				$('.sidebar li').eq(0).siblings('li').children('i').css({'width':'0px'})
			}
			if($(window).scrollTop()>=ss2){
				$('.sidebar li').eq(1).addClass('sid-list').siblings('').removeClass('sid-list')
				$('.sidebar li').eq(1).children('i').css({'width':'100%'})
				$('.sidebar li').eq(1).siblings('li').children('i').css({'width':'0px'})
			}
			if($(window).scrollTop()>=ss3){
				$('.sidebar li').eq(2).addClass('sid-list').siblings('').removeClass('sid-list')
				$('.sidebar li').eq(2).children('i').css({'width':'100%'})
				$('.sidebar li').eq(2).siblings('li').children('i').css({'width':'0px'})
				
			}
			if($(window).scrollTop()>=ss4){
				$('.sidebar li').eq(3).addClass('sid-list').siblings('').removeClass('sid-list')
				$('.sidebar li').eq(3).children('i').css({'width':'100%'})
				$('.sidebar li').eq(3).siblings('li').children('i').css({'width':'0px'})
				
			}
			if($(window).scrollTop()>=ss5){
				$('.sidebar li').eq(4).addClass('sid-list').siblings('').removeClass('sid-list')
				$('.sidebar li').eq(4).children('i').css({'width':'100%'})
				$('.sidebar li').eq(4).siblings('li').children('i').css({'width':'0px'})
				
			}
			$('.sidebar li').click(function(event){
				$(this).addClass('sid-list').siblings('').removeClass('sid-list')
				num=$(this).index();
				if(num==0){
					$('html,body').stop().animate({'scrollTop':(ss1+100)+'px'},1000)
				}else if(num==1){
					$('html,body').stop().animate({'scrollTop':(ss2+100)+'px'},1000)
				}else if(num==2){
					$('html,body').stop().animate({'scrollTop':(ss3+100)+'px'},1000)
				}else if(num==3){
					$('html,body').stop().animate({'scrollTop':(ss4+100)+'px'},1000)
				}else if(num==4){
					$('html,body').stop().animate({'scrollTop':(ss5+200)+'px'},1000)
				}
			});
		});

$('aside .asd1').css('opacity','0')
$(window).scroll(function(event) {
	if($(window).scrollTop()>2*$(window).height()){
		$('aside .asd1').css('opacity', '1');
	}
	else{
		$('aside .asd1').css('opacity','0')
	}
});

$('aside .asd1').click(function(event) {
	$('html,body').animate({'scrollTop':0}, 500)
});

$('aside .asd2').hover(function() {
	$(this).children('a').css('display', 'inline-block');
}, function() {
	$(this).children('a').css('display', 'none').eq(0).css('display', 'inline-block');
	$('.asd2 a span').css('opacity', '1');
});
$('.asd2 a').mouseenter(function(event) {
	$(this).children('span').css('opacity', '0.5').parent().siblings('a').children('span').css('opacity', '1');

});
		
// }