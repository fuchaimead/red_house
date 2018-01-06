import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import Wallpaper from '../images/Wallpaper.jpg'


class Menu extends Component {

  state = { items: [], userId: null }

  componentWillMount(){
    axios.get('/api/items')
      .then( res => {
        this.setState({items: res.data[0], userId: res.data[1]})
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  displayItem = () => {
    return this.state.items.map( item => {
      return (
        <li key={item.id}>
          {item.name} =>
          {item.price} =>
          {item.description}
          <Button onClick={ () => this.addToCart(item.id)}>Add Item</Button>
        </li>
      )
    })
  }

  addToCart = (itemId) => {
    axios.put(`/api/items/${itemId}`, {user_id: this.state.userId})
      .then( res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Menu Component</Header>
      <ul>
        {this.displayItem()}
      </ul>
      </Segment>
      </div>

    );
  }
}

const styles = {
  image: {
    backgroundImage: "url("+ Wallpaper + ")",
    backgroundSize: "cover"
  },
  opacity: {
    backgroundColor: "rgba(200, 200, 200, 0)",
    height: "100vh"
  }
}

export default connect()(Menu);
