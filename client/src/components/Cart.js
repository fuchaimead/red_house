import React, { Component} from 'react'
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import { Button, Modal, Header, Icon, Segment } from 'semantic-ui-react'
import Wallpaper from '../images/Wallpaper.jpg'

class Cart extends Component {

  state = { cartItems: [], modalOpen: false }

  componentWillMount(){
    axios.get('/api/index_cart')
      .then( res => {
        this.setState({ cartItems: res.data})
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  displayCartItem = () => {
    return this.state.cartItems.map( each => {
      return (
        <li>
          {each.name} => {each.price}
        </li>
      )
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false})




  render(){
    return(

      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Cart Component</Header>



      <ul>
        {this.displayCartItem()}
      </ul>
        <Modal
          trigger={<Button onClick={this.handleOpen}>Total</Button>}
          basic size=
          'small'
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
          <Header icon='archive' content='Confirm Your Order' />
            <Modal.Content>
              {this.displayCartItem()}
            </Modal.Content>
            <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>

      </Segment>

      </div>
  )
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

export default connect()(Cart);
