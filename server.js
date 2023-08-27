const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve assets (including images) directly from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'landingPage.html'));
});

app.get('/cars', (req, res) => {
  res.sendFile(path.join(__dirname, 'cariMobil.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
