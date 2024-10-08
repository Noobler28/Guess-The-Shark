const sharks = [
    { name: "Angel Shark", image: "images/angel_shark.jpg", aliases: ["angel"] },
    { name: "Basking Shark", image: "images/basking_shark.jpg", aliases: [] },
    { name: "Blacknose Shark", image: "images/blacknose.jpg", aliases: [] },
    { name: "Blacktip Reef Shark", image: "images/blacktip_reef.jpg", aliases: [] },
    { name: "Blue Shark", image: "images/blue_shark.jpg", aliases: [] },
    { name: "Bramble Shark", image: "images/bramble_shark.jpg", aliases: [] },
    { name: "Brown Shyshark", image: "images/brown_shyshark.jpg", aliases: [] },
    { name: "Bull Shark", image: "images/bull_shark.jpg", aliases: [] },
    { name: "Carpet Shark", image: "images/carpet_shark.jpg", aliases: [] },
    { name: "Cookie Cutter Shark", image: "images/cookie_shark.jpg", aliases: [] },
    { name: "Copper Shark", image: "images/copper_shark.jpg", aliases: [] },
    { name: "Caribbean Reef Shark", image: "images/creef_shark.jpg", aliases: [] },
    { name: "Crocodile Shark", image: "images/crocodile_shark.jpg", aliases: [] },
    { name: "Dogfish", image: "images/dogfish_shark.jpg", aliases: [] },
    { name: "Dusky Shark", image: "images/dusky_shark.jpg", aliases: [] },
    { name: "Epaulette Shark", image: "images/epaulette_shark.jpg", aliases: [] },
    { name: "Frilled Shark", image: "images/frilled_shark.jpg", aliases: [] },
    { name: "Galapogos Shark", image: "images/galapogos_shark.jpg", aliases: [] },
    { name: "Goblin Shark", image: "images/goblin_shark.jpg", aliases: [] },
    { name: "Greenland Shark", image: "images/greenland_shark.jpg", aliases: [] },
    { name: "Grey Reef Shark", image: "images/greyreef_shark.jpg", aliases: [] },
    { name: "Gulper Shark", image: "images/gulper_shark.jpg", aliases: [] },
    { name: "Great White Shark", image: "images/great_white.jpg", aliases: [] },
    { name: "Hammerhead Shark", image: "images/hammerhead.jpg", aliases: [] },
    { name: "Horn Shark", image: "images/horn_shark.jpg", aliases: [] },
    { name: "Kitefin Shark", image: "images/kitefin_shark.jpg", aliases: [] },
    { name: "Lantern Shark", image: "images/lantern_shark.jpg", aliases: [] },
    { name: "Lemon Shark", image: "images/lemon_shark.jpg", aliases: [] },
    { name: "Leopard Shark", image: "images/leopard_shark.jpg", aliases: [] },
    { name: "Mako Shark", image: "images/mako_shark.jpg", aliases: [] },
    { name: "Megamouth Shark", image: "images/megamouth_shark.jpg", aliases: [] },
    { name: "Milk Shark", image: "images/milk_shark.jpg", aliases: [] },
    { name: "Nurse Shark", image: "images/nurse_shark.jpg", aliases: [] },
    { name: "Oceanic White Tip Shark", image: "images/oceanic_shark.jpg", aliases: [] },
    { name: "Porbeagle Shark", image: "images/porbeagle_shark.jpg", aliases: [] },
    { name: "Pygmy Shark", image: "images/pygmy_shark.jpg", aliases: [] },
    { name: "Pyjama Shark", image: "images/pyjama_shark.jpg", aliases: [] },
    { name: "Salmon Shark", image: "images/salmon_shark.jpg", aliases: [] },
    { name: "Sand Tiger Shark", image: "images/sandtiger_shark.jpg", aliases: [] },
    { name: "Saw Shark", image: "images/saw_shark.jpg", aliases: [] },
    { name: "Sharpnose Shark", image: "images/sharpnose_shark.jpg", aliases: [] },
    { name: "Silky Shark", image: "images/silky_shark.jpg", aliases: [] },
    { name: "Silvertip Shark", image: "images/silvertip_shark.jpg", aliases: [] },
    { name: "Smoothhound Shark", image: "images/smoothhound.jpg", aliases: [] },
    { name: "Spinner Shark", image: "images/spinner_shark.jpg", aliases: [] },
    { name: "Thresher Shark", image: "images/thresher_shark.jpg", aliases: [] },
    { name: "Tiger Shark", image: "images/tiger_shark.jpg", aliases: [] },
    { name: "Whale Shark", image: "images/whale_shark.jpg", aliases: [] },
    { name: "Wobbegong Shark", image: "images/wobbegong_shark.jpg", aliases: [] },
    { name: "Zebra Shark", image: "images/zebra_shark.jpg", aliases: [] }
];

// Shuffle the sharks array for random order
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(sharks);

let currentSharkIndex = 0;
let score = 0;

// Load sound effects
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

// Function to show the next shark
function showNextShark() {
    const sharkImageElement = document.getElementById('shark-image');
    sharkImageElement.src = sharks[currentSharkIndex].image;
}

// Function to check the user's guess
function checkGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    const currentShark = sharks[currentSharkIndex];

    // Normalize the current shark name and include aliases
    const currentSharkName = currentShark.name.toLowerCase();
    const allAcceptableNames = [currentSharkName, ...currentShark.aliases.map(alias => alias.toLowerCase())];

    // Check if the guess matches the current shark name or any of its aliases
    if (allAcceptableNames.includes(guess)) {
        score += 1; // Increment score for correct guess
        correctSound.play(); // Play correct sound
        alert('Correct!'); // Show correct message
        currentSharkIndex++; // Move to the next shark
        if (currentSharkIndex < sharks.length) {
            showNextShark();
        } else {
            endGame();
        }
    } else {
        wrongSound.play(); // Play wrong sound
        alert('Unlucky, maybe you will have better luck on this one!'); // Show wrong message
    }

    document.getElementById('guess-input').value = ''; // Clear input field after guess
}

// Function to end the game
function endGame() {
    alert(`Game Over! Your score is ${score} out of ${sharks.length}.`);
    
    // Prompt for player name
    const playerName = prompt("Please enter your name:");
    if (playerName) {
        // Save score to local storage
        updateLeaderboard(playerName, (score / sharks.length * 100).toFixed(0));
    }

    // Redirect to end page
    window.location.href = `end.html?score=${(score / sharks.length * 100).toFixed(0)}`;
}

// Function to update leaderboard in Local Storage
function updateLeaderboard(playerName, playerScore) {
    // Get current leaderboard from local storage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Add new score
    leaderboard.push({ name: playerName, score: playerScore });
    // Sort by score descending
    leaderboard.sort((a, b) => b.score - a.score);
    // Limit to top 5 scores
    leaderboard = leaderboard.slice(0, 5);

    // Save updated leaderboard to local storage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Initialize the game
showNextShark();
