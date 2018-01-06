import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import axios from 'axios'


class Menu extends Component {

  state = { items: [] }

  componentWillMount(){
    axios.get('/api/items')
      .then( res => {
        this.setState({items: res.data})
      })
  }

  displayItem = () => {
    return this.state.items.map( item => {
      return (
        <li>
          {item.name} =>
          {item.price} =>
          {item.description}
          <Button>Add Item</Button>
        </li>
      )
    })
  }

  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Menu Component</Header>
        <ul>
          {this.displayItem()}
        </ul>
      </Segment>

    );
  }
}

export default Menu;
