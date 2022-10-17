const section = document.querySelector("section");




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


//RANDOMIZE

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

    const card = document.createElement("div");
    card.classList = "card";

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;

    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    });
};

cardGenerator();



















