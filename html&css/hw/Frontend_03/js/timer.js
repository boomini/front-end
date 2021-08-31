

var timer;
var start = function () {
    console.log("check")
    var hour = 0;
    var min = 0;
    var sec = 0;

    var showtimeDiv;
    function startTimeInterval() {
        return setInterval(() => {
            var time = `
            <h2>`
            if (hour < 10) time += `0`
            time += `${hour} : `
            if (min < 10) time += `0`
            time += `${min} : `
            if (sec < 10) time += `0`
            time += `${sec}</h2>`
            showtimeDiv.innerHTML = time;

            if (sec == 0) {
                if (sec == 0 && min == 0 && hour == 0) {
                    console.log("here")
                    clearInterval(timer);
                }
                sec = 59;
                min -= 1;
                if (min <= 0) {

                    if (hour <= 0) {

                        min = 0;
                        hour = 0;
                    } else {
                        min = 59;
                        hour -= 1;
                    }

                }
            } else {
                sec -= 1;
            }
        }, 1000);

    }
    hour = parseInt(document.getElementById("hour").value);
    min = parseInt(document.getElementById("min").value);
    sec = parseInt(document.getElementById("sec").value);

    showtimeDiv = document.getElementById("showtime");



    if (typeof hour != "number" || isNaN(hour) || typeof min != "number" || isNaN(min) || typeof sec != "number" || isNaN(sec)) {
        alert("제대로 된 값을 입력해주세요");
    } else if (hour > 24 || hour < 0 || min > 24 || min < 0 || sec > 24 || sec < 0) {
        alert("알맞은 숫자 범위를 입력해주세요")
    }
    else {
        clearInterval(timer);
        timer = startTimeInterval();
    }
}

