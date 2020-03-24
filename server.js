const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

// ---------------------- ROUTES
app.get('/', (req, res) => res.send ('<h1> Corona Virus Wellness </h1>'));


// ---------------------- START SERVER
app.listen(PORT, () => console.log('Server is running at localhost: 4000'));

