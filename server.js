//Install express server
const express = require('express');
const app = express();
app.get('/status', (_, res) => res.send({ status: 'Up and running.' }));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);