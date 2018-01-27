import React from 'react';
import { Container, Dropdown, Icon, Image,  Menu,  Input } from 'semantic-ui-react'
import AuthStore from '../../stores/AuthStore';
import { withRouter } from 'react-router-dom'


const LogoutButton = withRouter(({ history }) =>

    (<Menu.Item icon='log out' name='Log out' onClick={() => {
        AuthStore.signout(() => history.push('/login'))
    }}></Menu.Item>)
)

class TopHeader extends React.Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' href='/dashboard' header>
                        <Image
                            size='tiny'
                            src='/img/andmaplogo.png'
                            style={{ marginRight: '1.5em' }}
                        />
                        Demo Project
        </Menu.Item>
                    <Menu.Item  as='a' href='/dashboard'><Icon name='home'  />Dashboard</Menu.Item>

                    <Dropdown item simple text='Switch Project'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item><Icon name='list layout'  />Project List</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search project...' />
                        </Menu.Item>
                        <LogoutButton />
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default TopHeader