/* ACESSANDO OS ELEMENTOS DO DOM */

const startEL = document.getElementById('start');
const timerEL = document.getElementById('timer');
const stopEL = document.getElementById('stop');
const resetEL = document.getElementById('reset');


/* DECLARANDO AS VARIAVEIS */

let intervalo
let timeleft = 1500;

/* CRIANDO FUNÇÔES- ATUALIZAR TIMER */

function updateTimer() {
    let minuto = Math.floor(timeleft/60);
    let segundo = timeleft%60;
    let tempoFormatado = `${minuto.toString().padStart(2,'0')}:${segundo.toString().padStart(2,'0')}`;
    timerEL.innerHTML = tempoFormatado;
}

/* CF- STARTANDO TIMER */

function startTimer() {
    intervalo = setInterval(()=>{
        timeleft--
        updateTimer()
            if(timeleft === 0){
                clearInterval(intervalo)
                alert('O tempo acabou!')
                timeleft = 1500
                updateTimer()
            }
    }, 1000)
};

// CF - ADD STOP BUTTON

function stopTimer() {
    clearInterval(intervalo)
};

// CF - ADD RESET BUTTON 
function resetTimer() {
    clearInterval(intervalo)
    timeleft = 1500
    updateTimer()
};

/* CF-COLOCANDO STARTTIMER NO BOTAO START */

startEL.addEventListener('click', startTimer);
stopEL.addEventListener('click', stopTimer);
resetEL.addEventListener('click', resetTimer);