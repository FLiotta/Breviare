const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
const publicIp = require('public-ip');

var app = express();
const port = process.env.PORT || 5000;

const routes = require('./server/routes/routes');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next) => {
    publicIp.v4().then(ip => {
        req.client.ip = ip;
        next();
    });
});

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})