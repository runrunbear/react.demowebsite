import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login';
import Signup from './components/signup';
import About from './components/about';
import Home from './components/home';
//import AuthStore from './stores/AuthStore';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
	<Router>
		<div>
			<Switch>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/about" component={About} />
				<Route exact path="/home" component={Home} />
				<Route path="/" component={App} />
			</Switch>
		</div>
	</Router>, document.getElementById('root'));
registerServiceWorker();
