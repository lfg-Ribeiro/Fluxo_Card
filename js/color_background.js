// Quando o botão com a classe 'switcher-btn' é clicado, esta função é acionada
document.querySelector('.switcher-btn').onclick = () => {
    // A função toggle alterna a classe 'active'. Se a classe existir, ela é removida; se não existir, ela é adicionada.
    document.querySelector('.color-switcher').classList.toggle('active');
};

// A variável themeButtons recebe todos os elementos com a classe 'theme-buttons'
let themeButtons = document.querySelectorAll('.theme-buttons');

// Quando o HTML é carregado, essa função é acionada
addEventListener('DOMContentLoaded', () =>{
    // Recuperamos a cor armazenada localmente e a definimos como a variável CSS '--main-color'
    document.querySelector(':root').style.setProperty('--main-color', (localStorage.getItem('bg-color')));
})
