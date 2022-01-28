const nowTime = document.getElementById(`nowTime`);
let sec = 10;
const setTime = document.getElementById(`setTime`);
const startTimer = document.getElementById(`startTimer`)
const stopTimer = document.getElementById(`stopTimer`)
let timer;

let timehour;
let timemin;
let timesec;

setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;
    timesec = sec % 60;
    timemin = Math.floor((sec % 3600) / 60);
    timehour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${timehour}時間${timemin}分${timesec}秒：セット完了です`;
});

const countDown = function () {
    sec -= 1;
    timesec = sec % 60;
    timemin = Math.floor((sec % 3600) / 60);
    timehour = Math.floor(sec / 3600);
    nowTime.textContent = ` 残り${timehour} 時間${timemin} 分${timesec} 秒`;
    if (sec === 0) {
        alert(`終了`);
        clearInterval(timer);
    }
};

startTimer.addEventListener(`click`, function () {
    clearInterval(timer);
    timer = setInterval(`countDown()`, 1000)
});

stopTimer.addEventListener(`click`, function () {
    clearInterval(timer)
    timesec = sec % 60;
    timemin = Math.floor((sec % 3600) / 60);
    timehour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${timehour}時間${timemin}分${timesec}秒:ストップしました`;
});
