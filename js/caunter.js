document.addEventListener('DOMContentLoaded', () => {
    let timer_ = 1680026400
    new FlipDown(timer_, {
        headings: ["ДНИ", "ЧАСЫ", "МИНУТЫ", "СЕКУНДЫ"],
        theme: "light"
    }).start()
        .ifEnded(() => {
            document.querySelector('.flipdown').innerHTML = `<h1>ОСТАЛОСЬ ДО ПОКАЗА ФИЛЬМА</h1>`;
        })
});