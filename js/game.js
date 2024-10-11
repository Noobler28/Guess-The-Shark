const sharks = [
    { name: "Angel Shark", image: "images/angel_shark.jpg", aliases: ["angel"] },
    { name: "Basking Shark", image: "images/basking_shark.jpg", aliases: ["basking"] },
    { name: "Blacknose Shark", image: "images/blacknose.jpg", aliases: ["blacknose", "black nose", "black nose shark"] },
    { name: "Blacktip Reef Shark", image: "images/blacktip_reef.jpg", aliases: ["black tip reef shark", "black tip shark", "blacktip shark", "black tip", "blacktip"] },
    { name: "Blue Shark", image: "images/blue_shark.jpg", aliases: ["blue"] },
    { name: "Bramble Shark", image: "images/bramble_shark.jpg", aliases: ["bramble"] },
    { name: "Brown Shyshark", image: "images/brown_shyshark.jpg", aliases: ["brown shy shark", "shyshark", "shy shark"] },
    { name: "Bull Shark", image: "images/bull_shark.jpg", aliases: ["bull"] },
    { name: "Carpet Shark", image: "images/carpet_shark.jpg", aliases: ["carpet"] },
    { name: "Cookie Cutter Shark", image: "images/cookie_shark.jpg", aliases: ["cookie cutter", "cookie shark", "cookie"] },
    { name: "Copper Shark", image: "images/copper_shark.jpg", aliases: ["copper"] },
    { name: "Caribbean Reef Shark", image: "images/creef_shark.jpg", aliases: ["caribbean shark", "caribbean reef"] },
    { name: "Crocodile Shark", image: "images/crocodile_shark.jpg", aliases: ["crocodile"] },
    { name: "Dogfish", image: "images/dogfish_shark.jpg", aliases: ["dogfish shark"] },
    { name: "Dusky Shark", image: "images/dusky_shark.jpg", aliases: ["dusky"] },
    { name: "Epaulette Shark", image: "images/epaulette_shark.jpg", aliases: ["epaulette"] },
    { name: "Frilled Shark", image: "images/frilled_shark.jpg", aliases: ["frilled"] },
    { name: "Galapogos Shark", image: "images/galapogos_shark.jpg", aliases: ["galapogos"] },
    { name: "Goblin Shark", image: "images/goblin_shark.jpg", aliases: ["goblin"] },
    { name: "Greenland Shark", image: "images/greenland_shark.jpg", aliases: ["greenland"] },
    { name: "Grey Reef Shark", image: "images/greyreef_shark.jpg", aliases: ["greyreef shark", "greyreef", "grey reef"] },
    { name: "Gulper Shark", image: "images/gulper_shark.jpg", aliases: ["gulper"] },
    { name: "Great White Shark", image: "images/great_white.jpg", aliases: ["great white"] },
    { name: "Hammerhead Shark", image: "images/hammerhead.jpg", aliases: ["hammer head", "hammerhead", "hammer head shark"] },
    { name: "Horn Shark", image: "images/horn_shark.jpg", aliases: ["horn"] },
    { name: "Kitefin Shark", image: "images/kitefin_shark.jpg", aliases: ["kite fin", "kitefin", "kite fin shark"] },
    { name: "Lantern Shark", image: "images/lantern_shark.jpg", aliases: ["lantern"] },
    { name: "Lemon Shark", image: "images/lemon_shark.jpg", aliases: ["lemon"] },
    { name: "Leopard Shark", image: "images/leopard_shark.jpg", aliases: ["leopard"] },
    { name: "Mako Shark", image: "images/mako_shark.jpg", aliases: ["mako"] },
    { name: "Megamouth Shark", image: "images/megamouth_shark.jpg", aliases: ["mega mouth", "megamouth", "mega mouth shark"] },
    { name: "Milk Shark", image: "images/milk_shark.jpg", aliases: ["milk"] },
    { name: "Nurse Shark", image: "images/nurse_shark.jpg", aliases: ["nurse"] },
    { name: "Oceanic White Tip Shark", image: "images/oceanic_shark.jpg", aliases: ["oceanic white tip", "white tip", "white tip shark"] },
    { name: "Porbeagle Shark", image: "images/porbeagle_shark.jpg", aliases: ["porbeagle"] },
    { name: "Pygmy Shark", image: "images/pygmy_shark.jpg", aliases: ["pygmy"] },
    { name: "Pyjama Shark", image: "images/pyjama_shark.jpg", aliases: ["pyjama"] },
    { name: "Salmon Shark", image: "images/salmon_shark.jpg", aliases: ["salmon"] },
    { name: "Sand Tiger Shark", image: "images/sandtiger_shark.jpg", aliases: ["sand tiger", "sandtiger shark", "sandtiger"] },
    { name: "Saw Shark", image: "images/saw_shark.jpg", aliases: ["saw"] },
    { name: "Sharpnose Shark", image: "images/sharpnose_shark.jpg", aliases: ["sharp nose", "sharpnose", "sharp nose shark"] },
    { name: "Silky Shark", image: "images/silky_shark.jpg", aliases: ["silky"] },
    { name: "Silvertip Shark", image: "images/silvertip_shark.jpg", aliases: ["silvertip", "silver tip", "silver tip shark"] },
    { name: "Smoothhound Shark", image: "images/smoothhound.jpg", aliases: ["smoothhound", "smooth hound", "smooth hound shark"] },
    { name: "Spinner Shark", image: "images/spinner_shark.jpg", aliases: ["spinner"] },
    { name: "Thresher Shark", image: "images/thresher_shark.jpg", aliases: ["thresher"] },
    { name: "Tiger Shark", image: "images/tiger_shark.jpg", aliases: ["tiger"] },
    { name: "Whale Shark", image: "images/whale_shark.jpg", aliases: ["whale"] },
    { name: "Wobbegong Shark", image: "images/wobbegong_shark.jpg", aliases: ["wobbegong"] },
    { name: "Zebra Shark", image: "images/zebra_shark.jpg", aliases: ["zebra"] }
];

let currentSharkIndex = -1; // Start before the first shark
let score = 0;

// Function to load a random shark
function loadShark() {
    const randomIndex = Math.floor(Math.random() * sharks.length);
    currentSharkIndex = randomIndex;
    
    const shark = sharks[currentSharkIndex];
    document.getElementById("shark-image").src = shark.image;
}

// Function to check the user's guess
function submitGuess() {
    const guess = document.getElementById("guess-input").value.trim().toLowerCase();
    const shark = sharks[currentSharkIndex];

    // Check if the guess matches the shark's name or its aliases
    if (guess === shark.name.toLowerCase() || shark.aliases.includes(guess)) {
        score++;
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = `Wrong! The correct answer was: ${shark.name}`;
    }

    // Move to the next shark after a short delay
    setTimeout(() => {
        document.getElementById("feedback").innerText = "";
        document.getElementById("guess-input").value = "";
        loadShark();
    }, 2000);
}

// Function to end the game and save the score
function endGame() {
    localStorage.setItem('score', score);
    window.location.href = "end.html";
}

// Load the first shark when the game page is opened
loadShark();
