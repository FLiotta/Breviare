import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store';
import AppRouter from './routes/AppRouter';
import './styles/Main.scss';

const store = configStore();

store.subscribe(() => {
	console.log(store.getState())
})

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
	)
ReactDOM.render(jsx, document.getElementById('app'));