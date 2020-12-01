const enterCount = document.querySelector('#enterCount');
const hue = document.querySelector('#hue');
const rndm = document.querySelector('#rndm');
const square = document.querySelector('#square');
const isRandom = ( e ) => e.target.style.background = `#${ Math.floor(Math.random()*16777216).toString(16)}`;
const isBlack = (e) => e.target.style.background = `rgb(0,0,0)`;
let count;
enterCount.addEventListener('click', () => {
    addElement();
});
hue.addEventListener('click', () => {
   addHue(); 
});
rndm.addEventListener('click', () => {
    addRandomColor();
});

function addElement() {

    count = prompt("Введите количество пикселей на доске", 10);
    square.innerHTML = ``;
    const countdiv = 50 / count;
    const countdivmin = 720 / count;
    for (let i = 0; i < count * count; i++) {
        const div = document.createElement('div');
        square.appendChild(div);
        div.classList.add('pixel');
        div.style.cssText = `
    width: ${countdiv}vw;
    height: ${countdiv}vw;
     min-width: ${countdivmin}px;
    min-height: ${countdivmin}px;
background: rgb(256,256,256);`;
    };
    const pixeles = document.querySelectorAll('.pixel');
   
    pixeles.forEach(pixel => pixel.addEventListener('mouseenter', isBlack));
}

function addRandomColor() {
    const pixeles = document.querySelectorAll('.pixel');
    pixeles.forEach(pixel => pixel.addEventListener('mouseenter', isRandom));
}
function addHue(){

    const pixeles = document.querySelectorAll('.pixel');
        pixeles.forEach(function (pixel){
           pixel.removeEventListener('mouseenter', isRandom);
            pixel.removeEventListener('mouseenter', isBlack);
        });
      pixeles.forEach(pixel => pixel.addEventListener('mouseenter', () => {
        let color = pixel.style.background.slice(4,-1).split(', ');
        let r = +color[0];
        let g = +color[1];
        let b = +color[2];
        pixel.style.background = `rgb(${r-25.6}, ${g-25.6}, ${b-25.6})`;
  

    }));
}
