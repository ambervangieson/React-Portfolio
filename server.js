//Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//Middleware
app.use(passport.initialize());
//Config
require('./src/config/passport')(passport);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

 