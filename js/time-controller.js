const POMODORO_TIMER_DEFAULT = 1500; 
const SHORT_BREAK_TIMER_DEFAULT = 300;
const LONG_BREAK_TIMER_DEFAULT = 600;

let currentTime = POMODORO_TIMER_DEFAULT; //TODO: deixar dinamico de acordo com o tipo de periodo
let intervalId;

const startButton = document.getElementById( "startButton" );
const stopButton = document.getElementById( "stopButton" )
const campo_tempo = document.getElementById( "tempo-restante" );

setStep( 0 ); 

function updateCountdown() {
    if( currentTime == 0 ) {
        console.log( "fim da contagem" )
        //TODO: emitir notify para encerrar o periodo
    } else {
        currentTime--;
        refreshDisplay( currentTime );
    }
}

function setStep( step ) {

    stopCountdown(intervalId)

    switch( step ) {
        case 1: 
            timeToDisplay = SHORT_BREAK_TIMER_DEFAULT;
            currentTime = SHORT_BREAK_TIMER_DEFAULT;
            break;
        case 2: 
            timeToDisplay = LONG_BREAK_TIMER_DEFAULT;
            currentTime = LONG_BREAK_TIMER_DEFAULT;
            break;
        default:
            timeToDisplay = POMODORO_TIMER_DEFAULT;
            currentTime = POMODORO_TIMER_DEFAULT;
    }
    
    
    refreshDisplay( timeToDisplay );
}

function startCountdown(){
    intervalId = setInterval( updateCountdown, 1000 );
}

function stopCountdown() {
    clearInterval( intervalId );
}

function refreshDisplay( currentTime ) {
    campo_tempo.innerHTML = formatDate( currentTime )
}

function formatDate( currentTime ) {
    let min = Math.floor( currentTime / 60 );
    let sec = currentTime % 60;

    let date = {
        minute: min,
        second: sec
    };

    for( let key in date ) {
        if( date[key].toString().length === 1 ) {

            date[key] = "0" + date[key];
        }
    }

    return date["minute"] + ":" + date["second"];
}