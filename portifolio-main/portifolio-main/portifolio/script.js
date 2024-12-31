// Seleciona os elementos
const inicioButton = document.getElementById('inicioButton');
const sobreButton = document.getElementById('sobreButton');
const projetosButton = document.getElementById('projetosButton');
const contatoButton = document.getElementById('contatoButton');
const inicio = document.getElementById('inicio');
const sobreMim = document.getElementById('sobre-mim');
const projetos = document.getElementById('projetos');
const contato = document.getElementById('contato');

// Função para esconder todas as seções
function esconderTodasSecoes() {
    inicio.style.display = 'none';
    sobreMim.style.display = 'none';
    projetos.style.display = 'none';
    contato.style.display = 'none';
}

// Função para mostrar a seção "Início"
inicioButton.addEventListener('click', () => {
    esconderTodasSecoes();
    inicio.style.display = 'block'; // Exibe a seção "Início"
});

// Funções para mostrar as seções correspondentes aos outros botões
sobreButton.addEventListener('click', () => {
    esconderTodasSecoes();
    sobreMim.style.display = 'block';
});

projetosButton.addEventListener('click', () => {
    esconderTodasSecoes();
    projetos.style.display = 'block';
});

contatoButton.addEventListener('click', () => {
    esconderTodasSecoes();
    contato.style.display = 'block';
});

// Função para iniciar a digitação do texto
document.addEventListener("DOMContentLoaded", function() {
    // Exibe a seção "Início" ao carregar a página
    inicio.style.display = 'block'; // Garante que a seção "Início" seja visível

    // Inicia o efeito de digitação
    const typedTextSpan = document.querySelector(".texto-digitado");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["DESENVOLVEDOR", "PROGRAMADOR", "CRIADOR DE SOLUÇÕES"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 200; // Delay entre o texto atual e o próximo
    let textArrayIndex = 0;
    let charIndex = 0;

    // Função para digitar o texto
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    // Função para apagar o texto
    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});
