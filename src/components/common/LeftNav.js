import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default class LeftNav extends Component {
  state = { activeItem: this.props.activeItem===null?'editor': this.props.activeItem}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical >
        <Menu.Item name='editor' active={activeItem === 'editor'} as='a' href='/editor'>
          <Label color='teal'>1</Label>
          Editor
        </Menu.Item>

        <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Settings
        </Menu.Item>

        <Menu.Item name='demo' active={activeItem === 'demo'} as='a' href='/demo'>
          <Label>1</Label>
          Demo Page
        </Menu.Item>
        <Menu.Item name='demo' active={activeItem === 'demo'} as='a' href='/demo'>
          <Label>1</Label>
          Demo Page
        </Menu.Item>
        <Menu.Item name='demo' active={activeItem === 'demo'} as='a' href='/demo'>
          <Label>1</Label>
          Demo Page
        </Menu.Item>
        <Menu.Item name='demo' active={activeItem === 'demo'} as='a' href='/demo'>
          <Label>1</Label>
          Demo Page
        </Menu.Item>
        <Menu.Item name='demo' active={activeItem === 'demo'} as='a' href='/demo'>
          <Label>1</Label>
          Demo Page
        </Menu.Item>

        <Menu.Item>
          <Input icon='search' placeholder='Search ...' />
        </Menu.Item>
      </Menu>
    )
  }
}