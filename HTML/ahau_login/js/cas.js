
//head.ready(document, function() {
//    head.load("https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", loadjQueryUI);
//});
//
//function loadjQueryUI() {
//    head.load("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js", loadjQueryCookies);
//}
//
//function loadjQueryCookies() {
//    head.load("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js", resourceLoadedSuccessfully);
//}

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

$(document).ready(function() {
    if($(".pc-logbg") && $(".pc-logbg").length!=0) {
        if (detectmobile()){
                $(".pc-logbg").hide();
                $(".m-logbg").show();
        } else {
            $(".pc-logbg").show();
            $(".m-logbg").hide();
        }
    }
});

function areCookiesEnabled() {
    $.cookie('cookiesEnabled', 'true');
    var value = $.cookie('cookiesEnabled');
    if (value != undefined) {
        $.removeCookie('cookiesEnabled');
        return true;
    }
    return false;
}

function resourceLoadedSuccessfully() {
    $(document).ready(function() {

        if ($(":focus").length === 0){
            $("input:visible:enabled:first").focus();
        }


        if (areCookiesEnabled()) {
            $('#cookiesDisabled').hide();
        } else {
            $('#cookiesDisabled').show();
            $('#cookiesDisabled').animate({ backgroundColor: 'rgb(187,0,0)' }, 30).animate({ backgroundColor: 'rgb(255,238,221)' }, 500);
        }

        //flash error box
        $('#msg.errors').animate({ backgroundColor: 'rgb(187,0,0)' }, 30).animate({ backgroundColor: 'rgb(255,238,221)' }, 500);

        //flash success box
        $('#msg.success').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' }, 500);

        //flash confirm box
        $('#msg.question').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' }, 500);

        $('#capslock-on').hide();
        $('#password').keypress(function(e) {
            var s = String.fromCharCode( e.which );
            if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
                $('#capslock-on').show();
            } else {
                $('#capslock-on').hide();
            }
        });
        if (typeof(jqueryReady) == "function") {
            jqueryReady();
        }
    });

};
