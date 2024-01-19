let grinch = document.querySelector('#grinch')
grinch.style.display = "none"
grinch.setAttribute('draggable', 'false')
let positionGrinchX = 0
let positionGrinchY = 0
let main = document.querySelector('main')
let score = 0
let sound = new Audio('./assets/audio/michael-jackson-hee-hee.mp3')
let inter;
let linear;

document.querySelector('#title').innerHTML = 'Click le Grinch'
document.querySelector('#points').innerHTML = 'SCORE : ' + score
document.querySelector('#menuStart').innerHTML
document.querySelector('#clickStar').innerHTML = "Fais un max de click sur le Grinch pour le faire danser et acccumule un max de points"

let moove = (linear) => {
    positionGrinchX = randomize(0, main.offsetWidth - grinch.width)
    positionGrinchY = randomize(0, main.offsetHeight - grinch.height)
    grinch.style.transform = `translate(${positionGrinchX}px, ${positionGrinchY}px)`
    grinch.style.transition = `transform linear ${linear}s`
}

let displayScore = () => {
    document.querySelector('#points').innerHTML = 'SCORE : ' + score
    score++
    if (score < 5) {
        linear = 1
        clearInterval(inter)
        inter = setInterval(() => {
            moove(linear)
        }, 1000)

    }
    else if (score >= 5 && score <= 10) {
        linear = 0.5
        clearInterval(inter)
        inter = setInterval(() => {
            moove(linear)
        }, 500)

    }
    else if (score > 10) {
        linear = 0
        clearInterval(inter)
        inter = setInterval(() => {
            moove(linear)

        }, 400)
    }
}
let attack = () => {
    sound.play()
    moove(linear)
    sound.currentTime = 0;
    displayScore()
}

// function début de jeu

let start = () => {
    displayScore()
    document.querySelector('#grinch').style.display = "block"
    document.querySelector('#menuStart').style.display = "none"

}
// fonction rejouer
let rep = () => {
  
    clearInterval(inter)
    positionGrinchX = '1px'
    positionGrinchY = '1px'
    score = 0
    document.querySelector('#menuStart').style.display = "flex"
    grinch.style.display = "none"

}

//Fonction random
function randomize(min, max) {
    let nbr = Math.floor(Math.random() * (max - min + 1)) + min;
    return nbr;
}

//Fonction clikc propre
grinch.addEventListener("mousedown", () => {
    attack()
})