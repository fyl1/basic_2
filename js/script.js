$( document ).ready(function() {


//youtube script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_1;
var player_2;
var player_3;
var player_4;
var player_5;
onYouTubeIframeAPIReady = function () {
    player_1 = new YT.Player('player_1', {
        height: '100%',
        width: '100%',
        videoId: 'FoyvQPns64E',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player_2 = new YT.Player('player_2', {
        height: '100%',
        width: '100%',
        videoId: 'c6HdZpSitZ8',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player_3 = new YT.Player('player_3', {
        height: '100%',
        width: '100%',
        videoId: 'daZw3BcvjD8',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player_4 = new YT.Player('player_4', {
        height: '100%',
        width: '100%',
        videoId: 'JVTJeQ3Az04',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player_5 = new YT.Player('player_5', {
        height: '100%',
        width: '100%',
        videoId: '-7DruOtww-4',  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

}

var p_1 = document.getElementById ("player_1");
$(p_1).hide();

var p_2 = document.getElementById ("player_2");
$(p_2).hide();

var p_3 = document.getElementById ("player_3");
$(p_3).hide();

var p_4 = document.getElementById ("player_4");
$(p_4).hide();

var p_5 = document.getElementById ("player_5");
$(p_5).hide();


var t_1 = document.getElementById ("thumbnail_1");
t_1.src = "http://img.youtube.com/vi/FoyvQPns64E/maxresdefault.jpg";

var t_2 = document.getElementById ("thumbnail_2");
t_2.src = "http://img.youtube.com/vi/c6HdZpSitZ8/maxresdefault.jpg";

var t_3 = document.getElementById ("thumbnail_3");
t_3.src = "http://img.youtube.com/vi/daZw3BcvjD8/maxresdefault.jpg";

var t_4 = document.getElementById ("thumbnail_4");
t_4.src = "http://img.youtube.com/vi/JVTJeQ3Az04/maxresdefault.jpg";

var t_5 = document.getElementById ("thumbnail_5");
t_5.src = "http://img.youtube.com/vi/-7DruOtww-4/maxresdefault.jpg";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video_1').fadeIn('normal');
    }
    else if (event.data == YT.PlayerState.ENDED) {
        $('.start-video_2').fadeIn('normal');
    }
    else if (event.data == YT.PlayerState.ENDED) {
        $('.start-video_3').fadeIn('normal');
    }
    else if (event.data == YT.PlayerState.ENDED) {
        $('.start-video_4').fadeIn('normal');
    }
    else if (event.data == YT.PlayerState.ENDED) {
        $('.start-video_5').fadeIn('normal');
    }
}


$('.start-video_1').on('click', function () {
    $(this).hide();
    $("#player_1").show();
    $("#thumbnail_container_1").hide();
    player_1.playVideo();
});
$('.start-video_2').on('click' , function () {
    $(this).hide();
    $("#player_2").show();
    $("#thumbnail_container_2").hide();
    player_2.playVideo();
});
$('.start-video_3').on('click', function () {
    $(this).hide();
    $("#player_3").show();
    $("#thumbnail_container_3").hide();
    player_3.playVideo();
});
$('.start-video_4').on('click', function () {
    $(this).hide();
    $("#player_4").show();
    $("#thumbnail_container_4").hide();
    player_4.playVideo();
});
$('.start-video_5').on('click', function () {
    $(this).hide();
    $("#player_5").show();
    $("#thumbnail_container_5").hide();
    player_5.playVideo();
});
});

$(document).ready(function() {
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));



// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

	
    console.log("isFirefox " + " " +isFirefox );
console.log("isSafari" + " "+ isSafari);
console.log("isChrome" + " "+ isChrome);

if (navigator.userAgent.toLowerCase().match(/(ipad)/)) {
    $(document).ready(function() {
        $('.video-main').addClass("hidden")
        $('.video-main-gif').addClass("active")
        $('.video-main-gif').removeClass("hidden")
        var videoMainGif=document.querySelector('.video-main-gif')
        var img_1 = document.createElement('img');

        img_1.src='../image/ezgif.com-gif-maker (1).gif';

        videoMainGif.append(img_1);

    });
    



   
}
// if (isChrome == false) {
//     $(document).ready(function() {
//         $('.video-main').addClass("hidden")
//         $('.video-main-gif').addClass("active")
//         $('.video-main-gif').removeClass("hidden")
//         var videoMainGif=document.querySelector('.video-main-gif')
//         var img_1 = document.createElement('img');

//         img_1.src='../image/ezgif.com-gif-maker (1).gif';

//         videoMainGif.append(img_1);

//     });
    



   

if (navigator.userAgent.toLowerCase().match(/(iphone)/)) {
    $(document).ready(function() {
        $('.video-main').addClass("hidden")
        $('.video-main-mobile').addClass("active")
        $('.video-main-mobile').removeClass("hidden")
        var videoMainMobile=document.querySelector('.video-main-mobile')
        var img_2 = document.createElement('img');

        img_2.src='../image/ezgif.com-gif-maker-mobile.gif';

        videoMainMobile.append(img_2);

    });
   
}

});
