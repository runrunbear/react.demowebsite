import React, { Component } from 'react'
import CounterStore from "../../stores/CounterStore";
import Counter from "../counter/Counter";
import Sites from "../counter/Sites";
import LeftNav from "../common/LeftNav";
import {  Grid, Header } from 'semantic-ui-react'

export default class Dashboard extends Component {
	render() {
		return (
			<Grid container style={{ marginTop: '7em' }}>
				<Grid.Column width={3} textAlign='center'>
					<LeftNav activeItem='demo' />
				</Grid.Column>
				<Grid.Column width={13} textAlign='center'>
					<Header as='h1'>Demo</Header>
					<Counter store={CounterStore} />
					<Sites store={CounterStore} />

				</Grid.Column>
			</Grid>
		)
	}
}





