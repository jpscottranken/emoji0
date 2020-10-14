//  Declare Dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

//  Instantiate Express
const app = express();

//  Set port number
const PORT = process.env.PORT || 5000;

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Set view engine
app.set('view engine', 'hbs');

//  Set configurations
app.engine('hbs', handlebars ({
    layoutsDir: __dirname + '/views/layouts',
    extname:    'hbs'
}));

//  Define static assets folder
app.use(express.static('public'));

// Set handlebar index GET route
app.get('/', (req, res) => {
	res.render('index');	
});

// Set handlebar login GET route
app.get('/login', (req, res) => {
	res.render('login');		
});

// Set handlebar login POST route
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if ((username === "admin") &&
        (password === "password")) {
            //fs.appendFile('login.hbs', ' Successful Login', function (err) {
            //    if (err) throw err;
            //});
            res.render('dashboard');
    }
    /*else {
        fs.appendFile('login.hbs', ' Invalid login credentials, please try again.', function (err) {
            if (err) throw err;
        });
    }*/
});

// Set handlebar register GET route
app.get('/register', (req, res) => {
	res.render('register');		
});

//  Set handlebar register POST route
/*app.post('/register', (req, res) => {
    res.render('register');
});*/	

//  Set handlebar dashboard POST route
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

//  File Not Found Page
app.get('*', (req, res) => {
    res.render('filenotfound');
});

app.listen(PORT, () => {
    console.log(`App now running on port ${PORT}`);
});