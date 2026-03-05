const textElement = document.getElementById('text-display');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(node => node.id === textNodeIndex);
    textElement.innerText = textNode.text;
    
    // Limpa os botões antigos
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    // Cria novos botões para cada opção
    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    showTextNode(nextTextNodeId);
}

// O banco de dados da sua história
const textNodes = [
    {
        id: 1,
        text: "Você acorda em uma floresta escura. Há um caminho para o norte e uma caverna ao leste.",
        options: [
            { text: "Ir para o Norte", nextText: 2 },
            { text: "Entrar na Caverna", nextText: 3 }
        ]
    },
    {
        id: 2,
        text: "Você encontra um cavaleiro descansando. Ele te oferece uma espada.",
        options: [
            { text: "Aceitar a espada", nextText: 4 },
            { text: "Recusar e seguir viagem", nextText: 5 }
        ]
    },
    {
        id: 3,
        text: "Está muito escuro. Você tropeça e cai em um buraco. Fim de jogo.",
        options: [
            { text: "Tentar novamente", nextText: -1 }
        ]
    },
    {
        id: 4,
        text: "Com a espada em mãos, você se sente pronto para enfrentar o dragão!",
        options: [
            { text: "Reiniciar", nextText: -1 }
        ]
    }
];

startGame();
