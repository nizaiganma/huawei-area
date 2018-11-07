/*
* @Author: admin
* @Date:   2018-09-20 22:23:18
* @Last Modified by:   admin
* @Last Modified time: 2018-09-21 12:13:40
*/
$(function(){
    var num=0;
     	//看前一张图片 
     	$('.pre-empty').click(function(event) {
     		num--
     		if(num<0){
     		    num=0;
     		}
     		$('.con-link').eq(num).addClass('pgCurrent');
     		$('.con-link').eq(num).siblings().removeClass('pgCurrent');
     		var hr=$('.con-link').eq(num).children('a').attr('href');
     		// console.log(hr)
     		$(this).children('a').attr('href',hr)
     	});
     	// 看后一张图片 
     	$('.pre-next').click(function(event) {
     	    num++;
            if(num>4){
                num=4;
            }
            $('.con-link').eq(num).addClass('pgCurrent');
            $('.con-link').eq(num).siblings().removeClass('pgCurrent');
            var hr=$('.con-link').eq(num).children('a').attr('href');
            // console.log(hr)
            $(this).children('a').attr('href',hr)
            });

     	//配件
     	$('.pre-nexts').click(function(event) {
     	    num++;
            if(num>5){
                num=5;
            }
            $('.con-link').eq(num).addClass('pgCurrent');
            $('.con-link').eq(num).siblings().removeClass('pgCurrent');
            var hr=$('.con-link').eq(num).children('a').attr('href');
            // console.log(hr)
            $(this).children('a').attr('href',hr)
            });
     	//看第一页
     	$('.first-empty').click(function(event) {
     		$('.con-link').eq(0).addClass('pgCurrent');
     		$('.con-link').eq(0).siblings().removeClass('pgCurrent');
     		var hr=$('.con-link').eq(0).children('a').attr('href');
     		console.log(hr)
     		$(this).children('a').attr('href',hr)
     	});
     	//看最后一页
     	$('.first-next').click(function(event) {
     		$('.con-link').eq(4).addClass('pgCurrent');
     		$('.con-link').eq(4).siblings().removeClass('pgCurrent');
     		var hr=$('.con-next').attr('href');
     		// console.log(hr)
     		$(this).children('a').attr('href',hr)
     	});

     	//智能家居
     	$('.first-nexts').click(function(event) {
     		$('.con-link').eq(5).addClass('pgCurrent');
     		$('.con-link').eq(5).siblings().removeClass('pgCurrent');
     		var hr=$('.con-next').attr('href');
     		// console.log(hr)
     		$(this).children('a').attr('href',hr)
     	});
        });