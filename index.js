let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let laps = document.getElementById("laps");
let timer = null;

function stopwatch(){
    milliseconds += 10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00";
    laps.innerHTML = "";
}

function addLap(){
    let li = document.createElement("li");
    li.innerText = displayTime.innerText;
    laps.appendChild(li);
}

document.addEventListener("keydown", function(e){
    if(e.key === "s") watchStart();
    if(e.key === "e") watchStop();
    if(e.key === "r") watchReset();
    if(e.key === "l") addLap();
});