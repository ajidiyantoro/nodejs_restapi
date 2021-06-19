const  express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Call Routes
const routes = require('./routes');
routes.app();

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});