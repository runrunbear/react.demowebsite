import React from 'react';
import './App.css';
import {
	Route,
	Redirect, Switch
} from 'react-router-dom'
import TopHeader from './components/common/TopHeader'
import Footer from './components/common/Footer'
import AuthStore from './stores/AuthStore';
import Dashboard from './components/dashboard'
import Demo from './components/demo'
import Editor from './components/editor'
export default class App extends React.Component {
	state = {
		redirectToLogin: false
	}
	componentDidMount() {
		setInterval(function () { AuthStore.renewToken(); }, 3000000);
		if (!AuthStore.isUserAuthenticated)
			this.setState({ redirectToLogin: true })
	}
	render() {

		const { redirectToLogin } = this.state
		if (redirectToLogin) {
			return (
				<Redirect to="/home" />
			)
		}
		return <div>
			<TopHeader />

			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/demo" component={Demo} />
				<Route path="/editor" component={Editor} />
				<Route path="/" component={Dashboard} />
			</Switch>

			<Footer />
		</div>
	}
}
/*
const App = () => (
	<Router>
		<div id="wrapper">

			<div id="page-wrapper" className="gray-bg">

				<TopHeader />
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/topics">Topics</Link></li>
					<li><Link to="/blank">Blank</Link></li>
				</ul>

				<hr />

				<Route exact path="/" component={Home} />

				<Route path="/topics" component={Topics} />
				<Route path="/blank" component={Blank} />
				<Footer />
			</div>

		</div>



	</Router>
)

const Home = () => (
	<div>
		<h2>Home</h2>
		<p>
			<Counter store={CounterStore} />
			<Sites store={CounterStore} />
		</p>
	</div>
)



const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
					Rendering with React
		  </Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
					Components
		  </Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
					Props v. State
		  </Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)} />
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

export default App
*/


