const section = document.querySelector("section");
const flips = document.querySelector(".game-info-flips span");
const startButtons = document.querySelectorAll(".start");
const startPage = document.querySelector(".start-container");
const time = document.querySelector(".game-info-time-remaining span");


let flipCount = 0;

let timeLeft = 120;


const getData = () => [
    {name: "bear", imgSrc: "./images/bear.png"},
    {name: "cow", imgSrc: "./images/cow.png"},
    {name: "elephant", imgSrc: "./images/elephant.png"},
    {name: "fox", imgSrc: "./images/fox.png"},
    {name: "giraffe", imgSrc: "./images/giraffe.png"},
    {name: "horse", imgSrc: "./images/horse.png"},
    {name: "lion", imgSrc: "./images/lion.png"},
    {name: "pig", imgSrc: "./images/pig.png"},
    {name: "rabbit", imgSrc: "./images/rabbit.png"},
    {name: "sheep", imgSrc: "./images/sheep.png"},
    {name: "tiger", imgSrc: "./images/tiger.png"},
    {name: "zebra", imgSrc: "./images/zebra.png"},

    {name: "bear", imgSrc: "./images/bear.png"},
    {name: "cow", imgSrc: "./images/cow.png"},
    {name: "elephant", imgSrc: "./images/elephant.png"},
    {name: "fox", imgSrc: "./images/fox.png"},
    {name: "giraffe", imgSrc: "./images/giraffe.png"},
    {name: "horse", imgSrc: "./images/horse.png"},
    {name: "lion", imgSrc: "./images/lion.png"},
    {name: "pig", imgSrc: "./images/pig.png"},
    {name: "rabbit", imgSrc: "./images/rabbit.png"},
    {name: "sheep", imgSrc: "./images/sheep.png"},
    {name: "tiger", imgSrc: "./images/tiger.png"},
    {name: "zebra", imgSrc: "./images/zebra.png"}
];



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


    //TO TOGGLE BETWEEN CARDS
    card.addEventListener("click", (e) => {
        card.classList.toggle("flippedCard")
        checkCards(e);
    })

  });
};

cardGenerator();



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
            });

        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("flippedCard"), 500)
            });

            //FLIP COUNTER
            flipCount ++;
            console.log(flipCount);
            flips.textContent = flipCount;
        }     
    }

}


//TIMER ----- needs to start when start

const timer = setInterval(function() {
    time.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
        clearInterval(interval);
    }
}, 1000)





//Start Game

for (let i = 0; i < startButtons.length; i++) {
    startButtons[i].addEventListener("click", () => {
        startPage.classList.add("hidden");
    })
}









