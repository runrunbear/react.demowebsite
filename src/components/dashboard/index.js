import React, { Component } from 'react'
import LeftNav from "../common/LeftNav";
import { Grid, Header } from 'semantic-ui-react'
import AuthStore from '../../stores/AuthStore';
import SiteList from "../common/SiteList";
import Counter from "../counter/Counter";
import CounterStore from "../../stores/CounterStore";

export default class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
		};
	}

	componentDidMount() {
		/*
		AuthStore.loadSites( (message) => {
			this.setState({ message });
		});
		*/
	}

	render() {
		return (
			<Grid container style={{ marginTop: '2em' }}>
				<Grid.Column width={3} textAlign='center'>
					<LeftNav activeItem='dashboard' />
				</Grid.Column>
				<Grid.Column width={13} textAlign='center'>
					<Header as='h1'>Dashboard</Header>
					<SiteList store={this.props.store}  />
					<Counter store={CounterStore} />
					<h1>{this.state.message}</h1>
				</Grid.Column>
			</Grid>
		)
	}
}