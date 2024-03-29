/*Função para alteração da cor do semafaro*/;
let pare = document.getElementById('glob01');
let atencao = document.getElementById('glob02');
let siga = document.getElementById('glob03');
/*Função para alteração da cor dos buttons*/;
let btnRed = document.getElementById('red');
let btnYellow = document.getElementById('yellow');
let btnGreen = document.getElementById('green');
let automaticInterval;
let contador = 0;
let piscanteInterval;

function vermelho() {
    pare.style.backgroundColor = 'red';
    atencao.style.backgroundColor = '#6964644D';
    siga.style.backgroundColor = '#6964644D';
    /*Mudando as cores dos BTNs*/
    btnRed.style.backgroundColor = 'red';
    btnYellow.style.backgroundColor = 'white';
    btnGreen.style.backgroundColor = 'white';
    // Limpa o intervalo do modo automático, se estiver ativo
}
function amarelo() {
    atencao.style.backgroundColor = 'yellow';
    siga.style.backgroundColor = '#6964644D';
    pare.style.backgroundColor = '#6964644D';
    /*Mudando as cores dos BTNs*/
    btnYellow.style.backgroundColor = 'yellow';
    btnRed.style.backgroundColor = 'white';
    btnGreen.style.backgroundColor = 'white';
    // Limpa o intervalo do modo automático, se estiver ativo
}
function verde() {
    siga.style.backgroundColor = 'green';
    pare.style.backgroundColor = '#6964644D';
    atencao.style.backgroundColor = '#6964644D';
    /*Mudando as cores dos BTNs*/
    btnGreen.style.backgroundColor = 'green';
    btnRed.style.backgroundColor = 'white';
    btnYellow.style.backgroundColor = 'white';
    // Limpa o intervalo do modo automático, se estiver ativo
}
function automatico() {
    console.log("Automatico clicado");
    clearInterval(automaticInterval); // Limpa qualquer intervalo anterior
    automaticInterval = setInterval(() => {
        if (contador === 0) {
            vermelho();
        } else if (contador === 1) {
            amarelo();
        } else if (contador === 2) {
            verde();
        }
        contador = (contador + 1) % 3; // Incrementa o contador e garante que ele permaneça dentro do intervalo [0, 1, 2]
    }, 1000); // Intervalo de 1 segundo entre cada mudança de cor
}
function piscante() {
    console.log("Piscante clicado");
    clearInterval(piscanteInterval); // Limpa qualquer intervalo anterior
    piscanteInterval = setInterval(() => {
        if (pare.style.backgroundColor === 'yellow') {
            pare.style.backgroundColor = 'transparent';
            siga.style.backgroundColor = 'transparent';
            atencao.style.backgroundColor = 'transparent';
        } else {
            pare.style.backgroundColor = 'yellow';
            siga.style.backgroundColor = 'yellow';
            atencao.style.backgroundColor = 'yellow';
        }
        btnGreen.style.backgroundColor = 'white';
        btnRed.style.backgroundColor = 'white';
        btnYellow.style.backgroundColor = 'white';
    }, 500); // Intervalo de 500 milissegundos para piscar
}
function desligar() {
    console.log('Desligar clicado');
    clearInterval(piscanteInterval);
    clearInterval(automaticInterval);
    pare.style.backgroundColor = 'transparent';
    siga.style.backgroundColor = 'transparent';
    atencao.style.backgroundColor = 'transparent';
    btnGreen.style.backgroundColor = 'white';
    btnRed.style.backgroundColor = 'white';
    btnYellow.style.backgroundColor = 'white';
}
//Manipulando eventos para dar Stop na function automatic & Piscante;
btnRed.addEventListener('click', () => {
    clearInterval(automaticInterval); // Limpa o intervalo automático
    clearInterval(piscanteInterval); // Limpa o intervalo piscante
    vermelho(); // Chama a função vermelho
});
btnYellow.addEventListener('click', () => {
    clearInterval(automaticInterval); // Limpa o intervalo automático
    clearInterval(piscanteInterval); // Limpa o intervalo piscante
    amarelo(); // Chama a função amarelo
});
btnGreen.addEventListener('click', () => {
    clearInterval(automaticInterval); // Limpa o intervalo automático
    clearInterval(piscanteInterval); // Limpa o intervalo piscante
    verde(); // Chama a função verde
});
document.getElementById('automatic').addEventListener('click', () => {
    clearInterval(piscanteInterval);
    automatico(); // Chama a função automatico
});
document.getElementById('flashing').addEventListener('click', () => {
    clearInterval(automaticInterval);
    piscante(); // Chama a função piscante
});