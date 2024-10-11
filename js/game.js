const sharks = [
    { name: "Angel Shark", image: "shark_images/angel_shark.jpg", aliases: ["angel"] },
    { name: "Basking Shark", image: "shark_images/basking_shark.jpg", aliases: ["basking"] },
    { name: "Blacknose Shark", image: "shark_images/blacknose.jpg", aliases: ["blacknose", "black nose", "black nose shark"] },
    { name: "Blacktip Reef Shark", image: "shark_images/blacktip_reef.jpg", aliases: ["black tip reef shark", "black tip shark", "blacktip shark", "black tip", "blacktip"] },
    { name: "Blue Shark", image: "shark_images/blue_shark.jpg", aliases: ["blue"] },
    { name: "Bramble Shark", image: "shark_images/bramble_shark.jpg", aliases: ["bramble"] },
    { name: "Brown Shyshark", image: "shark_images/brown_shyshark.jpg", aliases: ["brown shy shark", "shyshark", "shy shark"] },
    { name: "Bull Shark", image: "shark_images/bull_shark.jpg", aliases: ["bull"] },
    { name: "Carpet Shark", image: "shark_images/carpet_shark.jpg", aliases: ["carpet"] },
    { name: "Cookie Cutter Shark", image: "shark_images/cookie_shark.jpg", aliases: ["cookie cutter", "cookie shark", "cookie"] },
    { name: "Copper Shark", image: "shark_images/copper_shark.jpg", aliases: ["copper"] },
    { name: "Caribbean Reef Shark", image: "shark_images/creef_shark.jpg", aliases: ["caribbean shark", "caribbean reef"] },
    { name: "Crocodile Shark", image: "shark_images/crocodile_shark.jpg", aliases: ["crocodile"] },
    { name: "Dogfish", image: "shark_images/dogfish_shark.jpg", aliases: ["dogfish shark"] },
    { name: "Dusky Shark", image: "shark_images/dusky_shark.jpg", aliases: ["dusky"] },
    { name: "Epaulette Shark", image: "shark_images/epaulette_shark.jpg", aliases: ["epaulette"] },
    { name: "Frilled Shark", image: "shark_images/frilled_shark.jpg", aliases: ["frilled"] },
    { name: "Galapogos Shark", image: "shark_images/galapogos_shark.jpg", aliases: ["galapogos"] },
    { name: "Goblin Shark", image: "shark_images/goblin_shark.jpg", aliases: ["goblin"] },
    { name: "Greenland Shark", image: "shark_images/greenland_shark.jpg", aliases: ["greenland"] },
    { name: "Grey Reef Shark", image: "shark_images/greyreef_shark.jpg", aliases: ["greyreef shark", "greyreef", "grey reef"] },
    { name: "Gulper Shark", image: "shark_images/gulper_shark.jpg", aliases: ["gulper"] },
    { name: "Great White Shark", image: "shark_images/great_white.jpg", aliases: ["great white"] },
    { name: "Hammerhead Shark", image: "shark_images/hammerhead.jpg", aliases: ["hammer head", "hammerhead", "hammer head shark"] },
    { name: "Horn Shark", image: "shark_images/horn_shark.jpg", aliases: ["horn"] },
    { name: "Kitefin Shark", image: "shark_images/kitefin_shark.jpg", aliases: ["kite fin", "kitefin", "kite fin shark"] },
    { name: "Lantern Shark", image: "shark_images/lantern_shark.jpg", aliases: ["lantern"] },
    { name: "Lemon Shark", image: "shark_images/lemon_shark.jpg", aliases: ["lemon"] },
    { name: "Leopard Shark", image: "shark_images/leopard_shark.jpg", aliases: ["leopard"] },
    { name: "Mako Shark", image: "shark_images/mako_shark.jpg", aliases: ["mako"] },
    { name: "Megamouth Shark", image: "shark_images/megamouth_shark.jpg", aliases: ["mega mouth", "megamouth", "mega mouth shark"] },
    { name: "Milk Shark", image: "shark_images/milk_shark.jpg", aliases: ["milk"] },
    { name: "Nurse Shark", image: "shark_images/nurse_shark.jpg", aliases: ["nurse"] },
    { name: "Oceanic White Tip Shark", image: "shark_images/oceanic_shark.jpg", aliases: ["oceanic white tip", "white tip", "white tip shark"] },
    { name: "Porbeagle Shark", image: "shark_images/porbeagle_shark.jpg", aliases: ["porbeagle"] },
    { name: "Pygmy Shark", image: "shark_images/pygmy_shark.jpg", aliases: ["pygmy"] },
    { name: "Pyjama Shark", image: "shark_images/pyjama_shark.jpg", aliases: ["pyjama"] },
    { name: "Salmon Shark", image: "shark_images/salmon_shark.jpg", aliases: ["salmon"] },
    { name: "Sand Tiger Shark", image: "shark_images/sandtiger_shark.jpg", aliases: ["sand tiger", "sandtiger shark", "sandtiger"] },
    { name: "Saw Shark", image: "shark_images/saw_shark.jpg", aliases: ["saw"] },
    { name: "Sharpnose Shark", image: "shark_images/sharpnose_shark.jpg", aliases: ["sharp nose", "sharpnose", "sharp nose shark"] },
    { name: "Silky Shark", image: "shark_images/silky_shark.jpg", aliases: ["silky"] },
    { name: "Silvertip Shark", image: "shark_images/silvertip_shark.jpg", aliases: ["silvertip", "silver tip", "silver tip shark"] },
    { name: "Smoothhound Shark", image: "shark_images/smoothhound.jpg", aliases: ["smoothhound", "smooth hound", "smooth hound shark"] },
    { name: "Spinner Shark", image: "shark_images/spinner_shark.jpg", aliases: ["spinner"] },
    { name: "Thresher Shark", image: "shark_images/thresher_shark.jpg", aliases: ["thresher"] },
    { name: "Tiger Shark", image: "shark_images/tiger_shark.jpg", aliases: ["tiger"] },
    { name: "Whale Shark", image: "shark_images/whale_shark.jpg", aliases: ["whale"] },
    { name: "Wobbegong Shark", image: "shark_images/wobbegong_shark.jpg", aliases: ["wobbegong"] },
    { name: "Zebra Shark", image: "shark_images/zebra_shark.jpg", aliases: ["zebra"] }
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
