import React, { Component } from 'react';
import { Header, Segment, Button, List, Icon, Table, Container, Input} from 'semantic-ui-react';
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
          <Segment inverted>
          <List divided inverted relaxed>
            <List.Item key={item.id}>
              <List.Content>
                <List.Header> {item.name} </List.Header>
                {item.price}
              {item.description}
            <Button onClick={ () => this.removeItem(item.id)}>Delete Item</Button>
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
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        )
      })
    }
    else {
      return this.state.items.map( item => {
        return (

            <Table.Row>
                <Table.Cell>
                {item.name}
                <br />
              <i> {item.description} </i>
                </Table.Cell>
                <Table.Cell>
                ${item.price}
                </Table.Cell>
                <Table.Cell>
            <Icon name='add' onClick={ () => this.addToCart(item.id)}> </Icon>
                </Table.Cell>
                <Table.Cell>
                <Input />
                </Table.Cell>
              </Table.Row>
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
      <Header as='h1' textAlign='center'>Menu</Header>
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Menu Items</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Add to Cart</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
           <Table.Body>
          {this.displayItem()}
          </Table.Body>
          </Table>
        </Container>
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
  },
  icon: {
    color: 'white'
  }
}
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Menu);
