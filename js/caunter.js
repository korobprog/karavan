document.addEventListener('DOMContentLoaded', () => {
    let timer_ = 1681516814 //https://www.epochconverter.com/
    new FlipDown(timer_, {
        headings: ["ДНИ", "ЧАСЫ", "МИНУТЫ", "СЕКУНДЫ"],
        theme: "max"
    }).start()
        .ifEnded(() => {
            document.querySelector('.flipdown').innerHTML = `<h1 style="font-family: Intro;  color: #ffffff;"> ОСТАЛОСЬ ДО ПОКАЗА ФИЛЬМА</h1> >ОСТАЛОСЬ ДО ПОКАЗА ФИЛЬМА</h1>`;
        })
});