// Import node.js path module //
const path = require('path');

// Export function //
module.exports = (app) =>
// Route handler for a GET request. Essentially creates index.html via the noted path when called //
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );