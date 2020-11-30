const enterCount = document.querySelector('#enterCount');

enterCount.addEventListener('click', () => {
  addElement();
});
function addElement(){
    const square = document.querySelector('#square');
    const count = prompt("Введите количество пикселей на доске", 10);
    square.innerHTML=``;
    const countdiv = 50 /count;
    const countdivmin = 720 /count;
        for (let i = 0; i < count*count; i++){
        const div = document.createElement('div');
        square.appendChild(div);
            div.classList.add('pixel');
   div.style.cssText = `
    width: ${countdiv}vw;
    height: ${countdiv}vw;
     min-width: ${countdivmin}px;
    min-height: ${countdivmin}px;`;
 };
        const pixeles = document.querySelectorAll('.pixel');
pixeles.forEach(pixel => pixel.addEventListener('mouseenter', () =>{
   // console.log('yes');
   pixel.style.background='black';
    }));
                                                }