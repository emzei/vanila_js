const bgImgs = [ "0.jpeg", "1.jpeg", "2.jpeg"];
const img = bgImgs[Math.floor(Math.random() * bgImgs.length)];
document.body.style.backgroundImage = `url('./img/${img}')`;
