import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './Main/Main';
import Redirect from './Redirect/Redirect';
import e404 from './Error/E404';

export default () => (
  <div className="container">
  	<BrowserRouter>
  		<Switch>
    		<Route path="/" exact component={Main} />
    		<Route path="/404" exact component={e404} />
    		<Route path="/:id" component={Redirect} />
      	</Switch>
    </BrowserRouter>
  </div>
);