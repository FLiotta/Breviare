import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Github from '../components/Github';
import MainPage from '../pages/MainPage';
import RedirectPage from '../pages/RedirectPage';
import ErrorPage from '../pages/ErrorPage';

export default (props) => (
	<div className="container-fluid">
		<Navbar />
  		<BrowserRouter>
  			<Switch>
    			<Route path="/" exact component={MainPage} />
    			<Route path="/404" component={ErrorPage} />
    			<Route path="/:id" component={RedirectPage} />
      		</Switch>
    	</BrowserRouter>
    	<Github />
  	</div>
);