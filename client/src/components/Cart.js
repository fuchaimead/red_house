import React, { Component } from 'react'
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'

class Cart extends Component {

  state = { cartItems: [] }

  componentWillMount(){
    axios.get('/api/index_cart')
      .then( res => {
        this.setState({ cartItems: res.data})
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  displayCartItem = () => {

  }

  render(){
    return(
      <div>
        Cart Goes Here
      </div>
  )
  }

}

export default connect()(Cart);
