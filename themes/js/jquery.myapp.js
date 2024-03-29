/*! Web App v1.0.0 | (c) 2017 Webchuyennghiep.info.
//@ Author: Lai Tuan
//@ Website: http://webchuyennghiep.info
//@ 
*/
$(document).ready(function() { 
new WOW().init();

$('#wcn_banner_wrap').addClass('wow fadeIn');
$('.home-hot-projects').addClass('wow fadeIn');
$('.home-customer-title').addClass('wow zoomIn');
$('.home-customer-item').addClass('wow zoomIn');
$('.list-news li').addClass('wow fadeInUp');
$('.hotnews').addClass('wow zoomIn');

$('.projets-list-item').addClass('wow zoomIn');
$('.content-page-list ul li').addClass('wow fadeInUp').attr("data-wow-duration","1.5s");

$('.project-banner').addClass('wow slideInLeft').attr("data-wow-duration","1s").attr("data-wow-delay","0.5s");

$('.home-news-item').addClass('wow fadeInUp').attr("data-wow-duration","2.5s");;

/*
$('#home_sevices').addClass('wow fadeIn');
$('#home_sys_products').addClass('wow fadeIn');
$('.home-sys-products-content .home-sys-product-item').addClass('wow fadeIn');
$('.view-all a').addClass('wow fadeInUp');
$('.home-news-title').addClass('wow zoomIn');


$('.content-page-list li').addClass('wow fadeIn');
$('.system-list .system-item').addClass('wow fadeIn');
$('.page-help-center-list .help-center-item').addClass('wow fadeIn');
*/
$('.footer-hotline').addClass('wow zoomIn');
$('.footer-content .footer-item').addClass('wow fadeInUp');

home_sevices();
home_news();
Back_to_Top();
Scroll_top(); 
});



function home_sevices(){
$(".home-sevices-content").owlCarousel({  
  pagination:false,
  navigation:true,
  autoPlay : true,
    stopOnHover : true,
	navigationText: [
      "<i class='glyphicon glyphicon-chevron-left'></i>",
      "<i class='glyphicon glyphicon-chevron-right'></i>"
      ],
	items : 3,
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [900,3], 
      itemsTablet: [800,2], 
      itemsMobile : [480,1] 	
 
  });
}
function home_news(){
$(".home-news-content").owlCarousel({  
  pagination:false,
  navigation:true,
  autoPlay : true,
    stopOnHover : true,
	 navigationText: [
      "<i class='glyphicon glyphicon-chevron-left'></i>",
      "<i class='glyphicon glyphicon-chevron-right'></i>"
      ],
	items : 4,
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [900,3], 
      itemsTablet: [800,2], 
      itemsMobile : [480,1] 	
 
  });
}
function Back_to_Top(){
$('#wcn_wrapper').append('<div id="backtotop">Back to Top</div>');
		$("#backtotop").hide();
	   $(window).scroll(function() {
		if($(window).scrollTop()  > 500) {
			$('#backtotop').fadeIn();
		} else {
			$('#backtotop').fadeOut();
		}
	   });
$('#backtotop').click(function() {
	$('html, body').animate({scrollTop:0},800);
});
}

function Scroll_top(){
	$(window).scroll(function () {
	if ($(this).width() > 1000) {	
			if ($(this).scrollTop() > 20) {
				$('#wcn_header_wrap').css("position","fixed").css("top","0").css("height","50px").css("z-index","999999");
				$('#wcn_header_wrap .header-content').css("height","50px");
				$('.menu-content').css("height","50px");				
				$('.wcn_menu>li>a').css("padding-top","15px").css("padding-bottom","14px");
				$('.wcn_menu .dropdown').css("top","50px");
				
				$('#logo').css("height","50px").css("width","auto");	
				$('#logo img').css("height","40px").css("width","auto");	
				$('.header-hotline').css("padding-top","15px").css("padding-bottom","14px");
			} else{
				$('#wcn_header_wrap').css("height","80px").css("position","relative");
				$('#wcn_header_wrap .header-content').css("height","80px");
				$('.menu-content').css("height","80px");				
				$('.wcn_menu>li>a').css("padding-top","30px").css("padding-bottom","29px");
				$('.wcn_menu .dropdown').css("top","80px");
				
				$('#logo').css("height","80px").css("width","auto");
				$('#logo img').css("height","40px").css("width","auto");
				$('.header-hotline').css("padding-top","30px").css("padding-bottom","29px");
			}
		}
	});
}


/* == Page scroll to id == Version: 1.5.8, License: MIT License (MIT) */
!function(e,t,a){var n,l,s,i,o,r,c,u,h,g,f,d,p="mPageScroll2id",_="mPS2id",C=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",v={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:_+"-clicked",targetClass:_+"-target",highlightClass:_+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1},m=0,S={init:function(r){var r=e.extend(!0,{},v,r);if(e(a).data(_,r),l=e(a).data(_),!this.selector){var c="__"+_;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}l.liveSelector&&(this.selector+=","+l.liveSelector),n=n?n+","+this.selector:this.selector,l.defaultSelector&&("object"==typeof e(n)&&0!==e(n).length||(n=C)),l.clickEvents&&e(a).undelegate("."+_).delegate(n,"click."+_,function(t){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var a=e(this),n=a.attr("href"),l=a.prop("href");n&&-1!==n.indexOf("#/")||(I._reset.call(null),g=a.data("ps2id-offset")||0,I._isValid.call(null,n,l)&&I._findTarget.call(null,n)&&(t.preventDefault(),i="selector",o=a,I._setClasses.call(null,!0),I._scrollTo.call(null)))}),e(t).unbind("."+_).bind("scroll."+_+" resize."+_,function(){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var t=e("._"+_+"-t");t.each(function(a){var n=e(this),l=n.attr("id"),s=I._findHighlight.call(null,l);I._setClasses.call(null,!1,n,s),a==t.length-1&&I._extendClasses.call(null)})}),s=!0,I._setup.call(null),I._live.call(null)},scrollTo:function(t,a){if(I._isDisabled.call(null))return void I._removeClasses.call(null);if(t&&"undefined"!=typeof t){I._isInit.call(null);var n={layout:l.layout,offset:l.offset,clicked:!1},a=e.extend(!0,{},n,a);I._reset.call(null),u=a.layout,h=a.offset,t=-1!==t.indexOf("#")?t:"#"+t,I._isValid.call(null,t)&&I._findTarget.call(null,t)&&(i="scrollTo",o=a.clicked,o&&I._setClasses.call(null,!0),I._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+_),e(a).undelegate("."+_).removeData(_),e("._"+_+"-t").removeData(_),I._removeClasses.call(null,!0)}},I={_isDisabled:function(){var e=t,n="inner",s=l.disablePluginBelow instanceof Array?[l.disablePluginBelow[0]||0,l.disablePluginBelow[1]||0]:[l.disablePluginBelow||0,0];return"innerWidth"in t||(n="client",e=a.documentElement||a.body),e[n+"Width"]<=s[0]||e[n+"Height"]<=s[1]},_isValid:function(e,a){if(e){a=a?a:e;var n=-1!==a.indexOf("#/")?a.split("#/")[0]:a.split("#")[0],l=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===n||decodeURIComponent(n)===decodeURIComponent(l))}},_setup:function(){var t=I._highlightSelector(),a=1,n=0;return e(t).each(function(){var s=e(this),i=s.attr("href"),o=s.prop("href");if(I._isValid.call(null,i,o)){var r=-1!==i.indexOf("#/")?i.split("#/")[1]:i.split("#")[1],c=e("#"+r);if(c.length>0){l.highlightByNextTarget&&c!==n&&(n?n.data(_,{tn:c}):c.data(_,{tn:"0"}),n=c),c.hasClass("_"+_+"-t")||c.addClass("_"+_+"-t"),c.data(_,{i:a}),s.hasClass("_"+_+"-h")||s.addClass("_"+_+"-h");var u=I._findHighlight.call(null,r);I._setClasses.call(null,!1,c,u),m=a,a++,a==e(t).length&&I._extendClasses.call(null)}}})},_highlightSelector:function(){return l.highlightSelector&&""!==l.highlightSelector?l.highlightSelector:n},_findTarget:function(t){var a=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],n=e("#"+a);if(n.length<1||"fixed"===n.css("position")){if("top"!==a)return;n=e("body")}return r=n,u||(u=l.layout),h=I._setOffset.call(null),c=[(n.offset().top-h[0]).toString(),(n.offset().left-h[1]).toString()],c[0]=c[0]<0?0:c[0],c[1]=c[1]<0?0:c[1],c},_setOffset:function(){h||(h=l.offset?l.offset:0),g&&(h=g);var t,a,n,s;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],a=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],a[0].length>0?(n=a[0].height(),"fixed"===a[0].css("position")&&(n+=a[0][0].offsetTop)):n=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,a[1].length>0?(s=a[1].width(),"fixed"===a[1].css("position")&&(s+=a[1][0].offsetLeft)):s=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(n=t[0],s=t[1]):n=s=t;break;default:n=s=parseInt(h)}return[n,s]},_findHighlight:function(a){var n=t.location,l=n.toString().split("#")[0],s=n.pathname;return e("._"+_+"-h[href='#"+a+"'],._"+_+"-h[href='"+l+"#"+a+"'],._"+_+"-h[href='"+s+"#"+a+"'],._"+_+"-h[href='#/"+a+"'],._"+_+"-h[href='"+l+"#/"+a+"'],._"+_+"-h[href='"+s+"#/"+a+"']")},_setClasses:function(t,a,n){var s=l.clickedClass,i=l.targetClass,r=l.highlightClass;t&&s&&""!==s?(e("."+s).removeClass(s),o.addClass(s)):a&&i&&""!==i&&n&&r&&""!==r&&(I._currentTarget.call(null,a)?(a.addClass(i),n.addClass(r)):(!l.keepHighlightUntilNext||e("."+r).length>1)&&(a.removeClass(i),n.removeClass(r)))},_extendClasses:function(){var t=l.targetClass,a=l.highlightClass,n=e("."+t),s=e("."+a),i=t+"-first",o=t+"-last",r=a+"-first",c=a+"-last";e("._"+_+"-t").removeClass(i+" "+o),e("._"+_+"-h").removeClass(r+" "+c),l.forceSingleHighlight?l.keepHighlightUntilNext&&n.length>1?(n.slice(0,1).removeClass(t),s.slice(0,1).removeClass(a)):(n.slice(1).removeClass(t),s.slice(1).removeClass(a)):(n.slice(0,1).addClass(i).end().slice(-1).addClass(o),s.slice(0,1).addClass(r).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+l.clickedClass).removeClass(l.clickedClass),e("."+l.targetClass).removeClass(l.targetClass+" "+l.targetClass+"-first "+l.targetClass+"-last"),e("."+l.highlightClass).removeClass(l.highlightClass+" "+l.highlightClass+"-first "+l.highlightClass+"-last"),t&&(e("._"+_+"-t").removeClass("_"+_+"-t"),e("._"+_+"-h").removeClass("_"+_+"-h"))},_currentTarget:function(a){var n=l["target_"+a.data(_).i],s=a.data("ps2id-target"),i=s&&e(s)[0]?e(s)[0].getBoundingClientRect():a[0].getBoundingClientRect();if("undefined"!=typeof n){var o=a.offset().top,r=a.offset().left,c=n.from?n.from+o:o,u=n.to?n.to+o:o,h=n.fromX?n.fromX+r:r,g=n.toX?n.toX+r:r;return i.top>=u&&i.top<=c&&i.left>=g&&i.left<=h}var f=e(t).height(),d=e(t).width(),p=s?e(s).height():a.height(),C=s?e(s).width():a.width(),v=1+p/f,m=v,S=f>p?v*(f/p):v,I=1+C/d,O=I,M=d>C?I*(d/C):I,b=[i.top<=f/m,i.bottom>=f/S,i.left<=d/O,i.right>=d/M];if(l.highlightByNextTarget){var y=a.data(_).tn;if(y){var w=y[0].getBoundingClientRect();"vertical"===l.layout?b=[i.top<=f/2,w.top>f/2,1,1]:"horizontal"===l.layout&&(b=[1,1,i.left<=d/2,w.left>d/2])}}return b[0]&&b[1]&&b[2]&&b[3]},_scrollTo:function(){d=I._scrollSpeed.call(null),c=l.pageEndSmoothScroll?I._pageEndSmoothScroll.call(null):c;var a=e("html,body"),n=l.autoScrollSpeed?I._autoScrollSpeed.call(null):d,s=a.is(":animated")?l.scrollingEasing:l.scrollEasing,i=e(t).scrollTop(),o=e(t).scrollLeft();switch(u){case"horizontal":o!=c[1]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollLeft:c[1]},n,s).promise().then(function(){I._callbacks.call(null,"onComplete")}));break;case"auto":if(i!=c[0]||o!=c[1])if(I._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var r;a.stop().animate({pageYOffset:c[0],pageXOffset:c[1]},{duration:n,easing:s,step:function(e,a){"pageXOffset"==a.prop?r=e:"pageYOffset"==a.prop&&t.scrollTo(r,e)}}).promise().then(function(){I._callbacks.call(null,"onComplete")})}else a.stop().animate({scrollTop:c[0],scrollLeft:c[1]},n,s).promise().then(function(){I._callbacks.call(null,"onComplete")});break;default:i!=c[0]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollTop:c[0]},n,s).promise().then(function(){I._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var n=e(a).height(),l=e(a).width(),s=e(t).height(),i=e(t).width();return[n-c[0]<s?n-s:c[0],l-c[1]<i?l-i:c[1]]},_scrollSpeed:function(){var t=l.scrollSpeed;return o&&o.length&&o.add(o.parent()).each(function(){var a=e(this);if(a.attr("class")){var n=a.attr("class").split(" ");for(var l in n)if(String(n[l]).match(/^ps2id-speed-\d+$/)){t=n[l].split("ps2id-speed-")[1];break}}}),parseInt(t)},_autoScrollSpeed:function(){var n=e(t).scrollTop(),l=e(t).scrollLeft(),s=e(a).height(),i=e(a).width(),o=[d+d*Math.floor(Math.abs(c[0]-n)/s*100)/100,d+d*Math.floor(Math.abs(c[1]-l)/i*100)/100];return Math.max.apply(Math,o)},_callbacks:function(e){if(l)switch(this[_]={trigger:i,clicked:o,target:r,scrollTo:{y:c[0],x:c[1]}},e){case"onStart":if(l.appendHash&&t.history&&t.history.pushState&&o&&o.length){var a="#"+o.attr("href").split("#")[1];a!==t.location.hash&&history.pushState("","",a)}l.onStart.call(null,this[_]);break;case"onComplete":l.onComplete.call(null,this[_])}},_reset:function(){u=h=g=!1},_isInit:function(){s||S.init.apply(this)},_live:function(){f=setTimeout(function(){l.live?e(I._highlightSelector()).length!==m&&I._setup.call(null):f&&clearTimeout(f),I._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,a=2.75;return 1/a>e?t*e*e:2/a>e?t*(e-=1.5/a)*e+.75:2.5/a>e?t*(e-=2.25/a)*e+.9375:t*(e-=2.625/a)*e+.984375}e.easing.easeInQuad=e.easing.easeInQuad||function(e){return e*e},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e){return.5>e?2*e*e:1-Math.pow(-2*e+2,2)/2},e.easing.easeInCubic=e.easing.easeInCubic||function(e){return e*e*e},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e){return.5>e?4*e*e*e:1-Math.pow(-2*e+2,3)/2},e.easing.easeInQuart=e.easing.easeInQuart||function(e){return e*e*e*e},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e){return.5>e?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},e.easing.easeInQuint=e.easing.easeInQuint||function(e){return e*e*e*e*e},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e){return.5>e?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},e.easing.easeInExpo=e.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:.5>e?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},e.easing.easeInSine=e.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},e.easing.easeOutSine=e.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},e.easing.easeInCirc=e.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e){return.5>e?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},e.easing.easeInElastic=e.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:.5>e?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5)))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},e.easing.easeInBack=e.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},e.easing.easeOutBack=e.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e){return.5>e?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},e.easing.easeInBounce=e.easing.easeInBounce||function(e){return 1-t(1-e)},e.easing.easeOutBounce=e.easing.easeOutBounce||t,e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(e){return.5>e?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};I._easing.call(),e.fn[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p].defaults=v}(jQuery,window,document);

/*Menu*/
$(document).ready(function(){

	$(".wcn_menu").wcn_menu();

	if (window.innerWidth < 801) {
		mobile_menu();
	 }
});

/*menu*/
function mobile_menu()
{
	$(".wcn-menu").hiraku({
		btn: ".btn-menu",
		fixedHeader: ".wcn-menu-header",
		direction: "left",
		breakpoint: 800,
	});	
	
}
/*Destop Cũ*/
$.fn.wcn_menu = function (e) {function r() {
       //$(".wcn_menu").find("li, a").unbind();  //khong click được khi mobie  
        if (window.innerWidth > 801) {
			u();
			i();	
        } 
    }

    function i() {
        $(".wcn_menu li").bind("mouseover", function () {
            $(this).children(".dropdown, .megapanel").stop().fadeIn(t.interval)
        }).bind("mouseleave", function () {
            $(this).children(".dropdown, .megapanel").stop().fadeOut(t.interval)
        })
    }function s() {
        $(".wcn_menu > li > a").bind("click", function (e) {
            if ($(this).siblings(".dropdown, .megapanel").css("display") == "none") {
                $(this).siblings(".dropdown, .megapanel").slideDown(t.interval);
                $(this).siblings(".dropdown").find("ul").slideDown(t.interval);
                n = 1
            } else {
                $(this).siblings(".dropdown, .megapanel").slideUp(t.interval)
            }
        })
    }function o() {
        $(".wcn_menu > li.showhide").show(0);
        $(".wcn_menu > li.showhide").bind("click", function () {
            if ($(".wcn_menu > li").is(":hidden")) {
                $(".wcn_menu > li").slideDown(300)
            } else {
                $(".wcn_menu > li:not(.showhide)").slideUp(300);
                $(".wcn_menu > li.showhide").show(0)
            }
        })
    }function u() {
        $(".wcn_menu > li").show(0);
        $(".wcn_menu > li.showhide").hide(0)
    }
    var t = {
        interval: 250
    };
    var n = 0;
   /* $(".wcn_menu").prepend("<li class='showhide'><span class='title'>MENU</span><div class='m-icon'><span class='icon1'></span><span class='icon2'></span><span class='icon3'></span><span class='icon4'></span></div></li>");*/
    r();
    $(window).resize(function () {
        r();
    })
}
/*Menu*/
$('.btn-shownav').append($('.nav-child-tab ul li.active a').html());
    $('.btn-shownav').click(function() {
        $('.nav-toggle').toggleClass('active');
        $(this).siblings('ul').slideToggle(300);
    });
/**/
var WebCN  = {
	ShowMessage: function(type, content, title, url_direct){		
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": true,
			"progressBar": false,
			"positionClass": "toast-bottom-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "3000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};
		 toastr.options.onHidden = function() { 		
				 if((url_direct != undefined) && (url_direct != '')){					 
					 window.location.href = url_direct; 
				 }
			 };
		Command: toastr[type](content, title);
	},
	AddClass: function(element, className){
		$(element).addClass(className);
	},
	RemoveClass: function(element, className){
		$(element).addClass(className);
	},
	MessageBox: function(message, url){
		bootbox.alert({
			message: message,
			 size: 'small',
			callback: function () {
				Redirect(url);
			}
		});
	},
	
	
};
/*Contact Function */
function register_contact(url, data, message,message_title, url_direct){
  $.ajax({
        type: "POST",
        url: url,
        data: data,             
        cache: false,
        contentType: false,
        processData: false,
		beforeSend: function () {
            $("#loading").fadeIn(400);
        },
        success: function(result)
        {
			$("#loading").fadeOut(800);
            var result=$.trim(result);						
			if(result=='success'){				
				WebCN.ShowMessage("success",message, message_title + " Thành công!",url_direct);
			}else{
				WebCN.ShowMessage("error",result," LỖI!");
				
			}
        },
        error: function(result)
        {
           alert("Xảy ra lỗi! URL");
        }
    });
}