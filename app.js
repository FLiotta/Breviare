const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
const port = process.env.PORT || 3000;

const routes = require('./server/routes/routes');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})