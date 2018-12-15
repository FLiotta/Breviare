# Breviare ✂️ ✌️

Breviare is a minimalist URL shortener made in Javascript (NodeJS / ExpressJS / MongoDB / ReactJS).

![alt text](ignore_it/intro.gif)

## Config 💾

Install all the dependencies with
```
npm install
npm run client-install
```

The project was made using mlab as database, so it's recommended to just create an mlab database and paste the link in a config file, but you can also modify the connection file on /server/db and configure it to run on your mongodb client.

```javascript
var config = {};

config.dbconnection = 'dbconnectionurl';

module.exports = config;
```

## Run

Once all the dependencies are installed and the database configured, run both, the client and server with the npm command
```
npm run dev
```

You can also run the server or the client by their own with:
```
npm run client
```

```
npm run server
```

## Demo 🔧

You can try it here, please remember that an url shortener depends on the url and this domain is a free one provided by Heroku.

http://breviare.herokuapp.com/
