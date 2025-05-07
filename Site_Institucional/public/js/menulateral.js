const botao = document.getElementById('botao-menu');
const faixamenu = document.getElementById('faixa-menu');

botao.addEventListener('click', () => {
  
  faixamenu.classList.toggle('open');

  if (faixamenu.classList.contains('open')) {
    botao.textContent = '➤';
  } else {
    botao.textContent = '◀';
  }

});