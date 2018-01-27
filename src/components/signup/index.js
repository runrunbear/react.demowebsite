import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import AuthStore from '../../stores/AuthStore';


class SignupForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: '',
			redirectToHome: false,
			status: 0,
			message: '',
		};
	}


	signup(e) {
		e.preventDefault()
		const email = document.querySelector('input[name=email]')
		if (!email.value.trim()) {
			return
		}

		const password = document.querySelector('input[name=password]')
		if (!password.value.trim()) {
			return
		}

		AuthStore.login(email.value, password.value).then((json) => {
			if (json.status === 1)
				this.setState({ redirectToHome: true })
			else
				this.setState({
					message: json.message,
				});
		}
		);
		email.value = ''
		password.value = ''
	}

	render() {
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
								/>
								<Form.Input
									fluid
									icon='lock'
									name='password'
									iconPosition='left'
									placeholder='Password'
									type='password'
								/>
								<Form.Input
									fluid
									placeholder='First Name'

								/>
								<Form.Input
									fluid
									placeholder='Last Name'
								/>
								<Form.Input
									fluid
									placeholder='Phone'
								/>

								<Button
									onClick={this.signup.bind(this)}
									color='teal' fluid size='large'>Signup</Button>
							</Segment>
						</Form>
						<Message>
							Existing member? <a href='/login'>Login</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}


export default SignupForm