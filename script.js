const hoursElement = document.querySelector("#hours")
const minutesElement = document.querySelector("#minutes")
const secondElement = document.querySelector("#seconds")

function newTime() {

const date = new Date();

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()


hoursElement.textContent = fixtame(hours)
minutesElement.textContent = fixtame(minutes)
secondElement.textContent = fixtame(seconds)

function fixtame(time) {
    return time < 10 ? "0"+time : time}}
newTime()
setInterval(newTime, 1000)
