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
correctSound.preload = 'auto'; // Preload correct sound
wrongSound.preload = 'auto'; // Preload wrong sound

// Function to show the next shark
function showNextShark() {
    const sharkImageElement = document.getElementById('shark-image');
    sharkImageElement.src = sharks[currentSharkIndex].image;
}

// Function to check the user's guess
function checkGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    const currentShark = sharks[currentSharkIndex].name.toLowerCase();

    if (guess === currentShark) {
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
    // Redirect to end page with score in the URL
    window.location.href = `end.html?score=${(score / sharks.length * 100).toFixed(0)}`;
}

// Initialize the game
showNextShark();