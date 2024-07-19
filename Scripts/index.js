const mario = document.querySelector(".mario")
const cano = document.querySelector(".cano")
const nuvem = document.querySelector(".nuvem")
const pulo = () => { 
    mario.classList.add("pulo")
    setTimeout(() => {
        mario.classList.remove('pulo');
     }, 500);

}

const loop = setInterval(() => {
const posicaoCano = cano.offsetLeft;
const posicaoMario = window.getComputedStyle(mario).bottom.replace('px', '');

const posicaoNuvem = window.getComputedStyle(nuvem).right.replace('px', '');

if(posicaoCano <= 120 && posicaoMario < 80) {

cano.style.animation = 'none';
cano.style.left = `${posicaoCano}px`

mario.style.animation = 'none'
mario.style.bottom = `${posicaoMario}`

mario.src = '../Assets/Images/game-over.png';
mario.style.width = '75px';
mario.style.marginLeft = '50px';

nuvem.classList.remove('vento');
nuvem.style.right = `${posicaoNuvem}px`;


clearInterval(loop)
}

}, 10);

document.addEventListener("keydown",pulo)

