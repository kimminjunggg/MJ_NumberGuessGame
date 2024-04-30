let computerNum = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = "";
})

function pickRandomNum() {
    // 숫자 0 ~ 49 까지의 랜덤 숫자인데 +1을 함으로써 1 ~ 50까지의 랜덤 숫자가 됌
    computerNum = Math.floor(Math.random()*50)+1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 50) {
        resultArea.textContent = "1 ~ 50 숫자만 가능"
        resultArea.style.color = 'orange'

        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 값"
        resultArea.style.color = 'orange';

        return;
    }

    chances --;
    chancesArea.textContent = `남은 횟수:${chances}번`;

    if(userValue < computerNum) {
        resultArea.textContent = "👆👆👆";
    } else if (userValue > computerNum) {
        resultArea.textContent = "👇👇👇"
    } else {
        resultArea.textContent = "🎉🎊🎉🎊"
        playButton.disabled = true;
        playButton.style.backgroundColor = 'gray';
    }

    history.push(userValue);
    
    
    

    if (chances < 1) {
        gameOver = true;
        resultArea.textContent = "땡!"
    } 

    if (gameOver == true) {
        playButton.disabled = true;
        playButton.style.backgroundColor = 'gray';
    }
};

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과는!"
}

pickRandomNum();
