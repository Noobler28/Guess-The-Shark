const sharks = [
    { name: "Angel Shark", image: "images/angel_shark.jpg" },
    { name: "Basking Shark", image: "images/basking_shark.jpg" },
    { name: "Blacknose Shark", image: "images/blacknose.jpg"},
    { name: "Blacktip Reef Shark", image: "images/blacktip_reef.jpg" },
    { name: "Blue Shark", image: "images/blue_shark.jpg" },
    { name: "Bramble Shark", image: "images/bramble_shark.jpg" },
    { name: "Brown shyshark", image: "images/brown_shyshark.jpg" },
    { name: "Bull Shark", image: "images/bull_shark.jpg" },
    { name: "Carpet Shark", image: "images/carpet_shark.jpg" },
    { name: "Cookie Cutter Shark", image: "images/cookie_shark.jpg" },
    { name: "Copper Shark", image: "images/copper_shark.jpg" },
    { name: "Caribbean Reef Shark", image: "images/creef_shark.jpg" },
    { name: "Crocodile Shark", image: "images/crocodile_shark.jpg" },
    { name: "Dogfish", image: "images/dogfish_shark.jpg" },
    { name: "Dusky Shark", image: "images/dusky_shark.jpg" },
    { name: "Epaulette Shark", image: "images/epaulette_shark.jpg" },
    { name: "Frilled Shark", image: "images/frilled_shark.jpg" },
    { name: "Galapogos Shark", image: "images/galapogos_shark.jpg" },
    { name: "Goblin Shark", image: "images/goblin_shark.jpg" },
    { name: "Greenland Shark", image: "images/greenland_shark.jpg" },
    { name: "Grey Reef Shark", image: "images/greyreef_shark.jpg" },
    { name: "Gulper Shark", image: "images/gulper_shark.jpg" },
    { name: "Great White Shark", image: "images/great_white.jpg" },
    { name: "Hammerhead Shark", image: "images/hammerhead.jpg" },
    { name: "Horn Shark", image: "images/horn_shark.jpg" },
    { name: "Kitefin Shark", image: "images/kitefin_shark.jpg" },
    { name: "Lantern Shark", image: "images/lantern_shark.jpg" },
    { name: "Lemon Shark", image: "images/lemon_shark.jpg" },
    { name: "Leopard Shark", image: "images/leopard_shark.jpg" },
    { name: "Mako Shark", image: "images/mako_shark.jpg" },
    { name: "Megamouth Shark", image: "images/megamouth_shark.jpg" },
    { name: "Milk Shark", image: "images/milk_shark.jpg" },
    { name: "Nurse Shark", image: "images/nurse_shark.jpg" },
    { name: "Oceanic White Tip Shark", image: "images/oceanic_shark.jpg" },
    { name: "Porbeagle Shark", image: "images/porbeagle_shark.jpg" },
    { name: "Pygmy Shark", image: "images/pygmy_shark.jpg" },
    { name: "Pyjama Shark", image: "images/pyjama_shark.jpg" },
    { name: "Salmon Shark", image: "images/salmon_shark.jpg" },
    { name: "Sand Tiger Shark", image: "images/sandtiger_shark.jpg" },
    { name: "Saw Shark", image: "images/saw_shark.jpg" },
    { name: "Sharpnose Shark", image: "images/sharpnose_shark.jpg" },
    { name: "Silky Shark", image: "images/silky_shark.jpg" },
    { name: "Silvertip Shark", image: "images/silvertip_shark.jpg" },
    { name: "Smoothhound Shark", image: "images/smoothhound.jpg" },
    { name: "Spinner Shark", image: "images/spinner_shark.jpg" },
    { name: "Thresher Shark", image: "images/thresher_shark.jpg" },
    { name: "Tiger Shark", image: "images/tiger_shark.jpg" },
    { name: "Whale Shark", image: "images/whale_shark.jpg" },
    { name: "Wobbegong Shark", image: "images/wobbegong_shark.jpg" },
    { name: "Zebra Shark", image: "images/zebra_shark.jpg" }
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