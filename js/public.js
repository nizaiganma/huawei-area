/*
* @Author: admin
* @Date:   2018-09-14 10:35:33
* @Last Modified by:   admin
* @Last Modified time: 2018-09-20 14:53:51
*/
var num=0;
var timer;
//头部
$('.dh .ts').hover(function(){
$(this).addClass('border1').siblings('li').removeClass('border1')
$(this).eq(0).children('div').css('display', 'block').parent().siblings('li').children('div').css('display', 'none');
$(this).children('span').css('transform', 'rotate(180deg)');
},function(){
$(this).eq(0).children('div').css('display', 'none')
$(this).removeClass('border1')
$(this).eq(1).children('div').css('display','none')
$(this).children('span').css('transform', 'rotate(360deg)');
})

$('.right ul li:nth-of-type(4)').hover(function() {
	$(this).addClass('border1')
	$(this).children('.content3').css('display', 'block');
}, function() {
	$(this).removeClass('border1')
	$(this).children('.content3').css('display', 'none');
});




$('.head_tittle li').hover(function() {
	$('.ht_content>div').eq($(this).index()).stop().slideDown(500);
	if($(this).index()<$('.ht_content>div').length-1){
		$('.ht_content').css('height','280px');
	}else{
		$('.ht_content').css('height','');
	}
}, function() {
	$('.ht_content>div').eq($(this).index()).stop().slideUp(500);
	$('.ht_content').css('height','');
});
$('.ht_content>div').hover(function() {
	$(this).stop().slideDown(500);
	$('.ht_content>div').eq($(this).index()).siblings().stop().hide();
}, function() {
	$(this).stop().slideUp(500);
});
//jq的获得焦点事件focus() 方法
$('#search_in').focus(function(){
	$('.hs_p').hide();
	$(this).css('border-color','#999');
});
//jq的失去焦点事件blur() 方法
$('#search_in').blur(function(){
	$('.hs_p').show();
	$(this).css('border-color','');
});
//尾部
	$('.pastRight').click(function(){
		num--;
		if(num<=-6){
			num=-6
				console.log(num)
			$(this).css('cursor','not-allowed')
		}
		if(num>-7){
			$('.list').css('margin-left',num*157)
		}
	})
	$('.pastLeft').click(function(){
		num++;
		if(num>0){
				num=0
				$(this).css('cursor','not-allowed')
		}
		if(num<=0){
				$('.list').css('margin-left',num*157)
		}
	})
	$('.pastLeft').mouseenter(function(){
		if(num<0){
			$(this).css('cursor','pointer')
		}
		if(num==0){
			$(this).css('cursor','not-allowed')
		}
	})
	$('.pastRight').mouseenter(function(){
		if(num>-6){
			$(this).css('cursor','pointer')
		}
		if(num==-6){
			$(this).css('cursor','not-allowed')
		}
	})