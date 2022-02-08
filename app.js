let blazersScore = 0
let lakersScore = 0

function increaseBlazersScore() {
    blazersScore + 3
    console.log('blazer score', blazersScore)
    draw()
}

function increaseLakersScore() {
    lakersScore++
    console.log('laker function', lakersScore)
    draw()
}

let score1 = document.getElementById('trailblazersScore')


function draw() {
    score1.innerText = blazersScore;
    document.getElementById('lakersScore').innerText = lakersScore;
}