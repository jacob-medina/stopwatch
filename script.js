var timeText = document.getElementById("time");
var startButton = document.getElementById("btn-start");
var pauseButton = document.getElementById("btn-pause");
var stopButton = document.getElementById("btn-stop");

var time = 0;
var timingInterval;

function incrementTime() {
    time += 10;

    var decimal = "";
    if (time % 100 === 0) {
        decimal = ".0";
    }
    timeText.innerHTML = (time / 100) + decimal;
}

function startStopwatch() {
    if (timingInterval !== undefined) { return; }

    time = 0;
    timingInterval = setInterval(incrementTime, 100);

    startButton.style.display = "none";
    stopButton.style.display = "block";
    pauseButton.style.display = "block";
}

function pauseOrResumeStopwatch() {
    if (time === 0) { return; }

    if (pauseButton.dataset.state === "pause") {
        clearInterval(timingInterval);
        pauseButton.innerHTML = "Resume";
        pauseButton.dataset.state = "resume";
    }

    else {
        timingInterval = setInterval(incrementTime, 100);
        pauseButton.innerHTML = "Pause";
        pauseButton.dataset.state = "pause";
    }
    
}

function stopStopwatch() {
    clearInterval(timingInterval);
    timingInterval = undefined;
    time = 0;
    timeText.innerHTML = time + ".0";

    startButton.style.display = "block";
    stopButton.style.display = "none";
    pauseButton.style.display = "none";
    pauseButton.innerHTML = "Pause";
    pauseButton.dataset.state = "pause";
}

startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", pauseOrResumeStopwatch);
stopButton.addEventListener("click", stopStopwatch);