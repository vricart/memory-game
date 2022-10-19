const section = document.querySelector("section");
const flips = document.querySelector(".game-info-flips span");

const startButtons = document.querySelectorAll(".start");
const startButton = document.getElementById("start");
const empezarButton = document.getElementById("empezar");
const comencarButton = document.getElementById("comencar");

const startPage = document.querySelector(".start-container");
const time = document.querySelector(".game-info-time-remaining span");
const stopButtons = document.querySelectorAll(".stop");
const endPage = document.querySelector(".end-container");
const result = document.getElementById("result");



let flipCount = 0;

let timeLeft = 90;

let winCount = 0;




const getData = () => [
    {name: "bear", imgSrc: "./images/bear.png", id:"", word: ""},
    {name: "cow", imgSrc: "./images/cow.png", id:""},
    {name: "elephant", imgSrc: "./images/elephant.png", id:"", word: ""},
    {name: "fox", imgSrc: "./images/fox.png", id:"", word: ""},
    {name: "horse", imgSrc: "./images/horse.png", id:"", word: ""},
    {name: "lion", imgSrc: "./images/lion.png", id:"", word: ""},
    {name: "pig", imgSrc: "./images/pig.png", id:"", word: ""},
    {name: "rabbit", imgSrc: "./images/rabbit.png", id:"", word: ""},
    {name: "sheep", imgSrc: "./images/sheep.png", id:"", word: ""},
    {name: "tiger", imgSrc: "./images/tiger.png", id:"", word: ""},

    {name: "bear", imgSrc: "", id: "bear", word: "el oso"},
    {name: "cow", imgSrc: "", id: "cow", word: "la vaca"},
    {name: "elephant", imgSrc: "", id: "elephant", word: "elephant"},
    {name: "fox", imgSrc: "", id: "fox", word: "la guineu"},
    {name: "horse", imgSrc: "", id: "horse", word: "el caballo"},
    {name: "lion", imgSrc: "", id: "lion", word: "lion"},
    {name: "pig", imgSrc: "", id: "pig", word: "el porc"},
    {name: "rabbit", imgSrc: "", id: "rabbit", word: "el conill"},
    {name: "sheep", imgSrc: "", id: "sheep", word: "l'ovella"},
    {name: "tiger", imgSrc: "", id: "tiger", word: "tiger"}
];

let getDataArr = [...getData()];
// console.log(getDataArr.length)


//RANDOMIZE CARDS

const randomize = () => {
    const cardData = getData();
    // console.log(cardData);

    cardData.sort(() => Math.random()-0.5);
    return cardData;
};



//CARD GENERATOR

const cardGenerator = () => {
    const cardData = randomize();
    // console.log(cardData);


    cardData.forEach((item) => {
        console.log(item);

    //CREATED DIFFERENT STATES OF CARDS
    const card = document.createElement("div");
    card.classList = "card";
    card.setAttribute("name", item.name);

    const face2 = document.createElement("div");
    const face1 = document.createElement("img");

    if(item.name === item.id) {
        face2.classList = "face flippedCard";
        face2.setAttribute("name", item.id);
        face2.innerHTML =`<div>${item.word}</div>`;
        card.appendChild(face2);

    } else {
        face1.classList = "face";
        face1.src = item.imgSrc;
        card.appendChild(face1);
    }


    // const face1 = document.createElement("img");
    // face1.classList = "face";
    // face1.src = item.imgSrc;
    
    // const face2 = document.createElement("div");
    // face2.classList = "face flippedCard";
    // face2.setAttribute("name", item.id);
    // face2.innerHTML =`<div>${item.id}</div>`;


    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(back);

    back.innerHTML = `<div>?</div>`;


    //TO TOGGLE BETWEEN CARDS
    card.addEventListener("click", (e) => {
        card.classList.toggle("flippedCard")
        checkCards(e);
    })
  }); 
};

// cardGenerator();



//CHECK CARDS

const checkCards = (e) => {
    const clickedCard = e.target;
    //console.log(clickedCard);

    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(flippedCards);


    if(flippedCards.length === 2) {

        let firstFlippedCard = flippedCards[0].getAttribute("name");
        let secondFlippedCard = flippedCards[1].getAttribute("name");

        if (firstFlippedCard === secondFlippedCard) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
                winCount ++;
                // console.log(winCount);
            });

        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("flippedCard"), 700)
            });

            //FLIP COUNTER
            flipCount ++;
            // console.log(flipCount);
            flips.textContent = flipCount;
        }     
    }
    
    if(winCount === getDataArr.length) {
        endGame();
        clearTimeout(stopTimeout);
        result.innerHTML = `<h2>You Won!</h2>`;
        endPage.classList.remove("hidden");
    }
}



//TIMER

const timer = () => {
    if (timeLeft <= 0) {
        // clearInterval(timer);
        time.textContent = '0';
    } else {
        time.textContent = timeLeft;
    }
    timeLeft -= 1;
}

//TIMED OUT

const timedOut = () => {
    stopTimeout = setTimeout(() => {
        endPage.classList.remove("hidden");
        result.innerHTML = `<h2>Try Again!</h2>`;
    }, 92000);
}




//START GAME

const startClick = () => {
    for (let i = 0; i < startButtons.length; i++) {
        startButtons[i].addEventListener("click", () => {
            startPage.classList.add("hidden");
            countdown = setInterval(timer, 1000);
            timedOut();
        })
    }
}


const startGame = () => {
    startClick();   
    cardGenerator();
}

startGame();



//STOP GAME

const endGame = () => {
    clearInterval(countdown);
    resultFireworks();
}





// //STOP GAME --- later for resetting game

// const stopGame = () => {
//     for (let i = 0; i < stopButtons.length; i++) {
//         stopButtons[i].addEventListener("click", () => {
//             startPage.classList.remove("hidden");
//             startButtons.classList.remove("hidden");
//         })
//     }
// }

// stopGame();







///FIREWORKS

const resultFireworks = () => {
    const fireworks = [];
const particles = [];

class Particle {
    constructor() {
        const colors = [
            "red",
            "organge",
            "yellow",
            "green",
            "blue",
            "purple",
            "pink",
            "cyan"
        ];

        this.x = 0;
        this.y = 0;
        this.speed = Math.random() * 1 + 3;
        this.angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;

        this.el = document.createElement("div");
        this.el.className = "particle";
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
        this.el.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
        document.body.appendChild(this.el);

        setTimeout(() => {
            this.el.remove();
            particles.splice(particles.indexOf(this), 1);
        }, 300);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
    }

    update() {
        this.setPosition(this.vx + this.x, this.vy + this.y);
        this.vy += 0.15;
    }
}

class Firework {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - 10;

        this.speed = 10;
        this.angle = (Math.random() * Math.PI / 2) + Math.PI / 4;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;

        this.el = document.createElement("div");
        this.el.className = "firework";
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
        document.body.appendChild(this.el);

        setTimeout(() => {
            this.el.remove();
            fireworks.splice(fireworks.indexOf(this), 1);
            this.explode();
        }, 800);
    }

    explode() {
        for(let i = 0; i < 30; i++) {
            const particle = new Particle();
            particle.setPosition(this.x, this.y);
            particles.push(particle);
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
        this.vy += 0.10;
    }
}

setInterval(() => {
    fireworks.forEach((firework) => firework.update())
    particles.forEach((particle) => particle.update())
}, 10)

setInterval(() => {
    const firework = new Firework();
    fireworks.push(firework);
}, 300)
}








