import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import axios from 'axios'


class Menu extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Menu Component</Header>
      </Segment>

    );
  }
}

export default Menu;
