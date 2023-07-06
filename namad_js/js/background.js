const images =[
    "0.jpeg", "1.jpeg", "2.jpeg"
];

const backGround = document.createElement("img");
const chosenImage = images[[(Math.floor(Math.random( )* images.length))]];

backGround.src = `img/${chosenImage}`;

document.body.prepend(backGround);