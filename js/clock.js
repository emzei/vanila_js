const clockTitle = document.querySelector(".js-clock");
const dateTitle = document.querySelector(".js-date");

const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function updateCurrentTime() {
    const now = new Date();

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const seconds = new String(now.getSeconds()).padStart(2, "0");
    const minutes = new String(now.getMinutes()).padStart(2, "0");
    const hours = new String(now.getHours()).padStart(2, "0");

    dateTitle.innerHTML = `${year} ${month} ${date} (${day})`;
    clockTitle.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}


updateCurrentTime();
setInterval(updateCurrentTime, 1000);
