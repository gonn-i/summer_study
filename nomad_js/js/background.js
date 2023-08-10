const images =[
    "0.jpg", "1.jpg", "2.jpg"
];

const backGround = document.createElement("img");
const chosenImage = images[[(Math.floor(Math.random( )* images.length))]];

backGround.src = `img/${chosenImage}`;

document.body.prepend(backGround);