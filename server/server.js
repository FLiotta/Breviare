const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const publicIp = require('public-ip');
const path = require('path');
const routes = require('./routes/routes');

const port = process.env.PORT || 5000;

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
	 "origin": "*",
	  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	  "preflightContinue": false,
	  "optionsSuccessStatus": 204
}));

app.use((req,res,next) => {
    publicIp.v4().then(ip => {
        req.client.ip = ip;
        next();
    });
});

app.use('/api', routes);

if(process.env.NODE_ENV === "production"){
	app.use(express.static('../client/build'));

	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
	})
}

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})