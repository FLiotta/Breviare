# Breviare ✂️ ✌️

Breviare is a minimalist URL shortener made in Javascript (NodeJS / ExpressJS / MongoDB / ReactJS).

![alt text](https://i.imgur.com/552dVwc.png)

## Config 💾

Install all the dependencies with
```
npm install
npm run server-install
npm run client-install
```

Create a ```config.js``` file on ```/server``` directory

```javascript
module.exports = {
	mongodb: {
		URL: 'MONGODB_URL'
	}
};
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
