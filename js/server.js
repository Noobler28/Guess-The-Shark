const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public')); // Serve your HTML and other static files

// Read leaderboard from file
app.get('/leaderboard', (req, res) => {
    fs.readFile('leaderboard.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading leaderboard' });
        }
        const leaderboard = data.split('\n').filter(Boolean).map(line => {
            const [name, score] = line.split(' ');
            return { name, score: parseInt(score, 10) };
        });
        res.json(leaderboard);
    });
});

// Update leaderboard (write to file)
app.post('/leaderboard', (req, res) => {
    const { name, score } = req.body;
    const newEntry = `${name} ${score}\n`;

    // Append new score to the file
    fs.appendFile('leaderboard.txt', newEntry, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing to leaderboard' });
        }
        res.json({ message: 'Leaderboard updated' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
