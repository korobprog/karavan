document.addEventListener('DOMContentLoaded', () => {
    let timer_ = 1681516814 //https://www.epochconverter.com/
    new FlipDown(timer_, {
        headings: ["ДНИ", "ЧАСЫ", "МИНУТЫ", "СЕКУНДЫ"],
        theme: "max"
    }).start()
        .ifEnded(() => {
            document.querySelector('.flipdown').innerHTML = `<iframe src="https://kinescope.io/embed/203353776" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; encrypted-media;" allowfullscreen></iframe>`;
        })
});