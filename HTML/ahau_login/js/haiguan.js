var slideWidth=0;//滑动图片单张宽度
var bannerListLength=0;//滑动图片长度
var picTT;
var picMaxHeight=576;
var picMaxWidth=1920;
$(".header_gonggao").hide();
if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    location.href = "/cas/browsers.html";
}
if (detectmobile()) {
    $("head").append('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/headerfootermobile.css">');
    $("head").append('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/login.css">');
    $("head").append('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/loginmobile.css">');
    //var firstPic=$(".banner-pic-list").eq(0).children("img").attr("src");
    $(".banner-pic-lists").html('<div class="banner-pic-list" style="background-image: url(/cas/themes/sudy_ahau/images/mobile_back.jpg);background-repeat: no-repeat;background-size: 100% 100%;"></div>');
} else {
    //$("head").append('<link rel="stylesheet" href="/cas/css/sudy_ahau/headerfooter.css">');
    //$("head").append('<link rel="stylesheet" href="/cas/css/sudy_ahau/login.css">');
    //document.write('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/headerfooter.css">');
    //document.write('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/login.css">');
	$("head").append('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/headerfooter.css">');
    $("head").append('<link rel="stylesheet" href="'+contextPath+'/themes/sudy_ahau/css/login.css">');
}
$(function () {
    if (!detectmobile()) {
        var firstPic=$(".banner-pic-list").eq(0).html();
        $(".banner-pic-lists").append('<div class="banner-pic-list">'+firstPic+'</div>');
        setTimeout(slide,100);
        window.onresize=function () {
            slide();
        };
    }
});

//登录方式切换
//$(document).on("click", ".login_header span", function () {
//    if (!$(this).hasClass("active")) {
//        $(".login_header span").removeClass("active");
//        $(this).addClass("active");
//        $(".login_form").addClass("displaynone");
//        $("." + $(this).data("tag")).removeClass("displaynone");
//    }
//});




//设备检测
function detectmobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
}

setInterval(showtime, 1000);
//倒计时
function showtime() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var currentTime = this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + "(" + this.day + ")";
    $(".header_time").html(currentTime);
}
//滚动图片
function slide() {
    clearInterval(picTT);
    $(".banner-pic-lists").css({"left":"0"});
    var hHeight = $(".banner").height();
    var bannerSeeWidth=$(".banner-see").width();
    var bannerList=$(".banner-pic-list");
    bannerListLength=bannerList.length;
    var sizeHeight=bannerSeeWidth/picMaxWidth*picMaxHeight;
    slideWidth=bannerSeeWidth;
    bannerList.css({"width":bannerSeeWidth+"px"});
    if(picMaxHeight>sizeHeight){
        bannerList.children("img").css("min-height","400px");
        bannerList.children("img").css("height","100%");
        $(".banner-see").css("min-height","400px");
        $(".banner-see").css("height","100%");

    }else{
        bannerList.children("img").css("height",picMaxHeight+30+"px")

    }
    $(".banner-see").css("height","100%");
    if(sizeHeight<400){
        sizeHeight=400;
    }
    $(".login").css("top",(hHeight-366)/2+"px");
    $(".banner-pic-lists").css({"width":bannerSeeWidth*bannerListLength+"px"});
    picTT=setInterval(slideEvent,3000);
}

//滚动事件
function slideEvent() {
    // var x=parseInt($(".banner-pic-lists").css("left"));
    // var length=Math.floor(Math.abs(x)/slideWidth);
    // var max=0;

    // if(length==bannerListLength-1){
    //     $(".banner-pic-lists").css({"left":"0"});
    //     x=0;
    //     max=x-slideWidth;
    // }else if(length<bannerListLength-1){
    //     max=-(length+1)*slideWidth;
    // }
    // var speed=slideWidth/50;
    // var tt=setInterval(function () {
    //     x-=speed;

    //     if(x<=max){
    //         clearInterval(tt);
    //         $(".banner-pic-lists").css({"left":""+max+"px"});
    //         return false;
    //     }
    //     $(".banner-pic-lists").css({"left":""+x+"px"});
    // },10);
}