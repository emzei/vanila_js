const bgImgs = [ "0.jpeg", "1.jpeg", "2.jpeg","3.jpeg"];
const img = bgImgs[Math.floor(Math.random() * bgImgs.length)];
const backgroundImage = document.createElement("img");
backgroundImage.src = `./img/${img}`;
document.body.appendChild(backgroundImage);
