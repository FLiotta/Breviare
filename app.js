const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const publicIp = require('public-ip');
const path = require('path');

var app = express();
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

if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));

	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})