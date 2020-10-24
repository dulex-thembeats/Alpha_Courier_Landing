const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

//Express path config
const viewPath = path.join(__dirname, '../Templates/views');
const publicDirectory = path.join(__dirname, '../Public');
const partialsDirectory = path.join(__dirname, '../Templates/partials');

//handlebars template engine location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsDirectory);

//setup static directory to serve
app.use(express.static(publicDirectory));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
app.get('/', (req, res) =>{
    // res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) =>{
    res.render('contact');
})

// exports.app = functions.https.onRequest(app);



app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
})