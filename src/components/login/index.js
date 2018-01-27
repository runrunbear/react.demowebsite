import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import AuthStore from '../../stores/AuthStore';
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			redirectToHome: false,
			message: '',
		};
	}


	login(e) {
		const email = this.state.email;
		if (!email.trim()) {
			return
		}

		const password = this.state.password;
		if (!password.trim()) {
			return
		}

		this.setState({
			message: 'processing...',
		});

		AuthStore.login(email, password, (authenticated, message) => {
			if (authenticated) {
				this.setState({ redirectToHome: true, message: 'Login accepted' });
			} else {
				this.setState({ message });
			}
		});

		/*
				AuthStore.login(email, password).then((json) => {
					if (json.status === 1) {
						this.setState({ redirectToHome: true })
						email.value = ''
						password.value = ''
					} else {
						this.setState({
							message: json.message
						});
					}
				});
		*/
	}

	render() {
		const { redirectToHome } = this.state

		if (redirectToHome) {
			return (
				<Redirect to="/dashboard" />
			)
		}
		return (
			<div className='login-form'>
				{/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
				<style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
				<Grid
					textAlign='center'
					style={{ height: '100%' }}
					verticalAlign='middle'
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/img/profile.jpg' />
							{' '}Sign Up
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input
									fluid
									icon='user'
									name='email'

									iconPosition='left'
									placeholder='E-mail address'
									onChange={e => this.setState({email : e.target.value})}
								/>
								<Form.Input
									fluid
									icon='lock'
									name='password'
									iconPosition='left'
									placeholder='Password'
									type='password'

									onChange={e => this.setState({password : e.target.value})}
								/>


								<Button
									onClick={this.login.bind(this)}
									color='teal' fluid size='large'>Login</Button>
								{this.state.message}
							</Segment>
						</Form>
						<Message>
							New to us? <a href='/signup'>Sign Up</a>
						</Message>

					</Grid.Column>
				</Grid>
			</div>
		)
	}
}


export default LoginForm