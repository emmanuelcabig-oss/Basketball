let scoreA = 0;
let scoreB = 0;

let gameSeconds = 0;
let shotSeconds = 24;

let gameInterval;
let shotInterval;

// SCORE
function addPoints(team, points){
    if(team === 'A'){
        scoreA += points;
        document.getElementById("scoreA").innerText = scoreA;
    } else {
        scoreB += points;
        document.getElementById("scoreB").innerText = scoreB;
    }
}

function removePoints(team, points){
    if(team === 'A'){
        scoreA -= points;
        if(scoreA < 0) scoreA = 0;
        document.getElementById("scoreA").innerText = scoreA;
    } else {
        scoreB -= points;
        if(scoreB < 0) scoreB = 0;
        document.getElementById("scoreB").innerText = scoreB;
    }
}

// GAME TIMER
function updateGame(){
    let m = Math.floor(gameSeconds / 60);
    let s = gameSeconds % 60;
    if(s < 10) s = "0" + s;

    document.getElementById("gameTimer").innerText = `${m}:${s}`;
}

function setGameTime(){
    gameSeconds = Number(document.getElementById("minutesInput").value) * 60;
    updateGame();
}

function startGameTimer(){
    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
        if(gameSeconds > 0){
            gameSeconds--;
            updateGame();
        }
    }, 1000);
}

function pauseGameTimer(){
    clearInterval(gameInterval);
}

function resetGameTimer(){
    clearInterval(gameInterval);
    gameSeconds = 0;
    updateGame();
}

// SHOT CLOCK
function updateShot(){
    document.getElementById("shotClock").innerText = shotSeconds;
}

function setShotClock(){
    shotSeconds = Number(document.getElementById("shotInput").value);
    updateShot();
}

function startShotClock(){
    clearInterval(shotInterval);

    shotInterval = setInterval(() => {
        if(shotSeconds > 0){
            shotSeconds--;
            updateShot();
        }
    }, 1000);
}

function pauseShotClock(){
    clearInterval(shotInterval);
}

function resetShotClock(){
    clearInterval(shotInterval);
    shotSeconds = 24;
    updateShot();
}

// RESET ALL
function resetEverything(){
    scoreA = 0;
    scoreB = 0;

    document.getElementById("scoreA").innerText = 0;
    document.getElementById("scoreB").innerText = 0;

    resetGameTimer();
    resetShotClock();
}
