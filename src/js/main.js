const cores = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

botao   = document.querySelector('button');
paragr  = document.querySelector('p');
body    = document.querySelector('body');
titulo  = document.querySelector('h1');

botao.addEventListener('click', randomizarCor);

function randomizarCor() {
    let cor = '#';

    for (let i = 0; i < 6; i++){
        cor += cores[Math.floor(Math.random() * cores.length)]
    }

    paragr.innerHTML            = cor;
    paragr.style.color          = cor;
    body.style.backgroundColor  = cor;
    titulo.style.color          = cor;
}

randomizarCor();