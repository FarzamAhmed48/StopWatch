var millisec=document.getElementById('msec');
var sec=document.getElementById('sec');
var hour=document.getElementById('hour');
var min=document.getElementById('min');
var han=document.getElementById('handle')
var hours=0;
var mins=0;
var secs=0;
var milsec=0;
var fms;
var fs;
var fm;
var fh;
var clear;
var count=true;
function timer(){
    milsec++
    fms=(millisec.innerHTML=milsec);
    fs=(sec.innerHTML=secs);
    fm=(min.innerHTML=mins);
    count=false;

    if(fms>=100){
        secs++
        sec.innerHTML=secs;
        milsec=0
    }
    else if(fs>=60){
        mins++
        min.innerHTML=mins;
        secs=0;
    }
    else if(fm>=60){
        hours++
        hour.innerHTML=hours;
        mins=0
    }
    


    
}
function start(){
    clear=setInterval(timer,10)
    
    
}

function pause(){
    clearInterval(clear)
    count=true
}
function reset(){
    millisec.innerHTML=0;
    sec.innerHTML=0;
    min.innerHTML=0;
    hours=0;
    mins=0;
    secs=0;
    milsec=0;
    clearInterval(clear)
    count=true

}

function check(){
    if(count){
        han.addEventListener("click",start)

    }
    else{
        han.removeEventListener("click",start)

    }
}