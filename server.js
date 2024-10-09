const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static('./'));

// Handle the Glitch loading status route
app.get('/___glitch_loading_status__', (req, res) => {
  res.sendStatus(200);
});

// Serve aframe_scene.html for the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/aframe_scene.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});