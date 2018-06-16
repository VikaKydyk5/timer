function timer(){
    let hour = document.getElementById('hour').innerHTML;
    let minute = document.getElementById('minute').innerHTML;
    let second = document.getElementById('second').innerHTML;
    let end = false;
    if( second > 0 ) second--;
    else{
        second = 59;  
        if( minute > 0 ) minute--;
        else{
            second = 59;
             
            if( hour > 0 ) hour--;
            else end = true;
        }
    }
    if(end){
        clearInterval(intervalID);
        alert("Таймер заробив!");
    }else{
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);