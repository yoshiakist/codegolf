window.onload = function(){

    /* 時計の文字を準備
     ==============================================*/
    var clock_0 = [
        '■■■',
        '■　■',
        '■　■',
        '■　■',
        '■■■'
    ];
    var clock_1 = [
        '　■　',
        '　■　',
        '　■　',
        '　■　',
        '　■　'
    ];
    var clock_2 = [
        '■■■',
        '　　■',
        '■■■',
        '■　　',
        '■■■'
    ];
    var clock_3 = [
        '■■■',
        '　　■',
        '■■■',
        '　　■',
        '■■■'
    ];
    var clock_4 = [
        '■　■',
        '■　■',
        '■■■',
        '　　■',
        '　　■'
    ];
    var clock_5 = [
        '■■■',
        '■　　',
        '■■■',
        '　　■',
        '■■■'
    ];
    var clock_6 = [
        '■■■',
        '■　　',
        '■■■',
        '■　■',
        '■■■'
    ];
    var clock_7 = [
        '■■■',
        '■　■',
        '　　■',
        '　　■',
        '　　■'
    ];
    var clock_8 = [
        '■■■',
        '■　■',
        '■■■',
        '■　■',
        '■■■'
    ];
    var clock_9 = [
        '■■■',
        '■　■',
        '■■■',
        '　　■',
        '■■■'
    ];
    var colon = [
        '　　　',
        '　■　',
        '　　　',
        '　■　',
        '　　　'
    ];


    var clock_pattern = [
        clock_0,
        clock_1,
        clock_2,
        clock_3,
        clock_4,
        clock_5,
        clock_6,
        clock_7,
        clock_8,
        clock_9,
        colon
    ];


    /* 1秒ごとにカウントアップ
     ==============================================*/
    var sec = 0;
    var setTimer = function() {
        var repeatObject = function() {
            showClock(sec);
            sec++;
            setTimeout(repeatObject, 1000);
        };
        repeatObject();
    };
    setTimer();


    /* 秒を mm:ss に変換し、時計を再描画
     ==============================================*/
    function showClock(t){
        var m = Math.floor( t / 60 );
        var s = t % 60;

        var m1 = Math.floor( m / 10);
        var m2 = m % 10;
        var s1 = Math.floor( s / 10);
        var s2 = s % 10;

        var timeString = '';
        for(var i=0; i<5; i++){
            timeString += clock_pattern[m1][i] + '　' + clock_pattern[m2][i] + '　' + clock_pattern[10][i] + '　' + clock_pattern[s1][i] + '　' + clock_pattern[s2][i] + '<br />';
        }

        document.body.innerHTML = '';
        document.body.innerHTML = timeString;
    }
}