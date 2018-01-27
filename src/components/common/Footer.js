import React from 'react';
import { Container, Divider} from 'semantic-ui-react'

class Footer extends React.Component {
	render() {
		return (
			<Container textAlign='center'>
				<Divider />
				Copyright &copy; demo 2018
			</Container>
		)
	}
}

export default Footer