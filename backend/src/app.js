const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from backend! check jenkins is perform or not' });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
