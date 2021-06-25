const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("p");

const TEXT_COLOR = "timeColor"
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.classList.add(TEXT_COLOR)

    clockTitle.innerText=`⏰ ${hours<10?`0${hours}`:hours} : ${minutes<10?`0${minutes}`:minutes} : ${seconds<10?`0${seconds}`:seconds}`;
    
}

function init(){
    setInterval(getTime, 1000);
}

init();