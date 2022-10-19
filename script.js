const section = document.querySelector("section");
const flips = document.querySelector(".game-info-flips span");
const startButtons = document.querySelectorAll(".start");
const startPage = document.querySelector(".start-container");
const time = document.querySelector(".game-info-time-remaining span");
const stopButtons = document.querySelectorAll(".stop");
const endPage = document.querySelector(".end-container");
const result = document.getElementById("result");




let flipCount = 0;

let timeLeft = 90;

let winCount = 0;


const getData = () => [
    {name: "bear", imgSrc: "./images/bear.png"},
    {name: "cow", imgSrc: "./images/cow.png"},
    {name: "elephant", imgSrc: "./images/elephant.png"},
    {name: "fox", imgSrc: "./images/fox.png"},
    {name: "horse", imgSrc: "./images/horse.png"},
    {name: "lion", imgSrc: "./images/lion.png"},
    {name: "pig", imgSrc: "./images/pig.png"},
    {name: "rabbit", imgSrc: "./images/rabbit.png"},
    {name: "sheep", imgSrc: "./images/sheep.png"},
    {name: "tiger", imgSrc: "./images/tiger.png"},

    {name: "bear", imgSrc: "./images/bear.png"},
    {name: "cow", imgSrc: "./images/cow.png"},
    {name: "elephant", imgSrc: "./images/elephant.png"},
    {name: "fox", imgSrc: "./images/fox.png"},
    {name: "horse", imgSrc: "./images/horse.png"},
    {name: "lion", imgSrc: "./images/lion.png"},
    {name: "pig", imgSrc: "./images/pig.png"},
    {name: "rabbit", imgSrc: "./images/rabbit.png"},
    {name: "sheep", imgSrc: "./images/sheep.png"},
    {name: "tiger", imgSrc: "./images/tiger.png"}
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

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;

    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
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
        result.innerHTML = `<h2>You Won!</h2>`;
        endPage.classList.remove("hidden");
        // endGame();
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
    setTimeout(() => {
        endPage.classList.remove("hidden");
        result.innerHTML = `<h2>Try Again!</h2>`;
    }, 90000);
}



//START GAME

const startClick = () => {
    for (let i = 0; i < startButtons.length; i++) {
        startButtons[i].addEventListener("click", () => {
            startPage.classList.add("hidden");
            countdown = setInterval(timer, 1000);
            // timedOut();
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
}



// //STOP GAME

// const stopGame = () => {
//     for (let i = 0; i < stopButtons.length; i++) {
//         stopButtons[i].addEventListener("click", () => {
//             startPage.classList.remove("hidden");
//             startButtons.classList.remove("hidden");
//         })
//     }
// }

// stopGame();




