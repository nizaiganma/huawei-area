/*
* @Author: admin
* @Date:   2018-09-21 12:17:17
* @Last Modified by:   admin
* @Last Modified time: 2018-09-21 18:11:24
*/
var num=0;
$('.bl-left').click(function(){
		num++;
		if(num>0){
				num=0
				$(this).css('cursor','not-allowed')
		}
		if(num<=0){
				$('.browse-lis').animate({'left':num*708},500)
		}
	})
	$('.bl-right').click(function(){
		num--;
		if(num<=-2){
			num=-2
			$(this).css('cursor','not-allowed')
		}
		if(num>-3){
			$('.browse-lis').animate({'left':num*708},500)
		}
	})
	$('.bl-left').mouseenter(function(){
		if($(this).siblings('.browse-lis').css('left')!='0px'){
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.browse-lis').css('left')=='0px'){
			$(this).css('cursor','not-allowed')
		}
	})
	$('.bl-right').mouseenter(function(){
		if($(this).siblings('.browse-lis').css('right')!='0px'){
			$(this).css('cursor','pointer')
		}
		if($(this).siblings('.browse-lis').css('right')=='0px'){
			$(this).css('cursor','not-allowed')
		}
		console.log($(this).siblings('.browse-lis').css('right'))
	})