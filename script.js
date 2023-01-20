function updateTime() {
    let jsHours = document.querySelector(".hours");
    let jsMinutes = document.querySelector(".minutes");
    let jsSeconds = document.querySelector(".seconds");

    const clock = new Date();

    console.log("smotret'");

    clock.getHours();
    clock.getMinutes();
    clock.getSeconds(); 

    jsHours.innerHTML = clock.getHours();
    jsMinutes.innerHTML = clock.getMinutes();
    jsSeconds.innerHTML = clock.getSeconds();

}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000)
