function updateTime() {
    let htmlHours = document.querySelector(".hours");
    let htmlMinutes = document.querySelector(".minutes");
    let htmlSeconds = document.querySelector(".seconds");

    const clock = new Date();

    console.log("smotret'");

    clock.getHours();
    clock.getMinutes();
    clock.getSeconds(); 

    htmlHours.innerHTML = clock.getHours();
    htmlMinutes.innerHTML = clock.getMinutes();
    htmlSeconds.innerHTML = clock.getSeconds();

}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000)
