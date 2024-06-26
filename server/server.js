// Run express framework //
const express = require('express');

// Define the port the server will be on //
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files that will be rendered from htmlRoutes.js in JSON format //
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initiate function from htmlRoutes //
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: localhost:${PORT}`));