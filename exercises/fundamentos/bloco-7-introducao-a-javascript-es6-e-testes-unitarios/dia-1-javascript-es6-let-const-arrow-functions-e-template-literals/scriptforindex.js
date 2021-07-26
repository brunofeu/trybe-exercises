const botao = document.getElementById('botao');
const cont = document.getElementById('cont');
let clickCount = 0;
botao.addEventListener('click', (event) => {
  clickCount +=1;
  cont.innerHTML = clickCount;
})

