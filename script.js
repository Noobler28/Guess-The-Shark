const sharks = [
    { name: "Great White", image: "images/great_white.jpg" },
    { name: "Hammerhead", image: "images/hammerhead.jpg" },
    { name: "Tiger Shark", image: "images/tiger_shark.jpg" },
    { name: "Bull Shark", image: "images/bull_shark.jpg" },
    { name: "Mako Shark", image: "images/mako_shark.jpg" }
];

let currentShark;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (document.title === "Guess the Shark!") {
        loadNextShark();
        
        document.getElementById("submitGuess").addEventListener("click", checkGuess);
        document.getElementById("nextButton").addEventListener("click", loadNextShark);
    } else if (document.title === "Game Over!") {
        document.getElementById("submitScore").addEventListener("click", submitScore);
    } else if (document.title === "Shark Guessing Game") {
        displayLeaderboard();
    }
});

function loadNextShark() {
    currentShark = sharks[Math.floor(Math.random() * sharks.length)];
    document.getElementById("sharkImage").src = currentShark.image;
    document.getElementById("result").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("nextButton").style.display = "none";
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.trim();
    if (guess.toLowerCase() === currentShark.name.toLowerCase()) {
        score++;
        document.getElementById("result").innerText = "Correct! Your score: " + score;
        document.getElementById("nextButton").style.display = "inline";
    } else {
        document.getElementById("result").innerText = "Wrong! It was: " + currentShark.name;
        document.getElementById("finishButton").style.display = "inline";
    }
}

function submitScore() {
    const playerName = document.getElementById("playerName").value.trim();
    if (playerName) {
        const scores = JSON.parse(localStorage.getItem("leaderboard")) || [];
        scores.push({ name: playerName, score: score });
        localStorage.setItem("leaderboard", JSON.stringify(scores));
        window.location.href = "index.html";
    }
}

function displayLeaderboard() {
    const scores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    scores.sort((a, b) => b.score - a.score);
    const leaderboard = document.getElementById("leaderboard");
    scores.forEach(entry => {
        const li = document.createElement("li");
        li.innerText = `${entry.name}: ${entry.score}`;
        leaderboard.appendChild(li);
    });
}