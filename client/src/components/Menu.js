import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import { Dropdown, Modal, Icon } from 'semantic-ui-react'
import Wallpaper from '../images/Wallpaper.jpg'


class Menu extends Component {

  state = { items: [], modalOpen: false, name: '', price: '', description: '' }

  componentWillMount(){
    axios.get('/api/items')
      .then( res => {
        this.setState({items: res.data })
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  displayItem = () => {
    if (this.props.user.is_admin){
      return this.state.items.map( item => {
        return (
          <li key={item.id}>
            {item.name} =>
            {item.price} =>
            {item.description}
            <Button onClick={ () => this.removeItem(item.id)}>Delete Item</Button>
            {/* <Button onClick={ () => this.editItem(item.id)}>Edit Item</Button> */}

            <Modal
              trigger={<Button onClick={this.handleOpen}>Edit</Button>}
              basic size=
              'small'
              open={this.state.modalOpen}
              onClose={this.handleClose}
              >
              <Header icon='archive' content='Confirm Your Order' />
                <Modal.Content>
                  <input
                    type="text"
                    id="name"
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                  <textarea
                    type="textArea"
                    id="description"
                    onChange={this.handleChange}
                    placeholder="Description"
                  ></textarea>
                  <input
                    type="number"
                    id="price"
                    onChange={this.handleChange}
                    placeholder="Price"
                  />
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={ () => this.handleClose(item.id)} inverted>
                  <Icon name='checkmark' /> Update
                </Button>
              </Modal.Actions>
            </Modal>

          </li>
        )
      })
    }
    else {
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
  }

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  addToCart = (itemId) => {
    axios.put(`/api/items/${itemId}`, {user_id: this.props.user.id})
      .then( res => {
        console.log(res)
      })
  }

  removeItem = (itemId) => {
    axios.delete(`/api/items/${itemId}`)
      .then( res => {
        console.log(res)
      })
  }

  editItem = (itemId) => {
    axios.put(`/api/items/${itemId}`, {name: this.state.name, price: this.state.price, description: this.state.description})
      .then( res => {
        console.log(res)
      })
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = (itemId) => {
    this.setState({ modalOpen: false})
    this.editItem(itemId)
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
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Menu);
