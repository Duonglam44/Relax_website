window.onload = () => {
    var btnPause = document.querySelector('.pause');
    var btnPlay = document.querySelector('.play');
    var video = document.querySelector('#video');
    var clock = document.querySelector('#clock');

    function playPause(){
        if(video.paused){
            btnPause.classList.remove('hide');
            btnPlay.classList.add('hide');
            video.play();
        }else{
            btnPause.classList.add('hide');
            btnPlay.classList.remove('hide');
            video.pause();
        }
    }

    btnPlay.onclick = () => {
        playPause();
    }
    btnPause.onclick = () => {
        playPause();
    }

    function realTime(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        hours = (hours > 12) ? hours - 12 : hours;

        var amPm = (hours < 12) ? 'AM' : 'PM';
        
        hours = updateTime(hours);
        minutes = updateTime(minutes);
        seconds = updateTime(seconds);
        clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' '+ amPm;
        
        // kiem tra so < 10;
        function updateTime(time){
            if(time < 10){
               return time = '0' + time;
            }else return time ;
        }
        var t = setTimeout(realTime, 1000); 
    }
    realTime();
}