import React, { Component } from 'react';
import { Header, Segment, Button, Icon, Table, Container, Input, TextArea } from 'semantic-ui-react';
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import Wallpaper from '../images/Wallpaper.jpg'
import { setFlash } from '../actions/flash'

class Menu extends Component {

  state = { items: [], editing: 0, name: '', price: '', description: '', modalOpen: false }

  componentWillMount(){
    axios.get('/api/items')
      .then( res => {
        this.setState({items: res.data })
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  addToCart = (itemId) => {
    axios.put(`/api/items/${itemId}`, {user_id: this.props.user.id})
      .then( res => {
        this.props.dispatch(setFlash('Item Added to Cart', 'green'))
        console.log(res)
      })
  }

  removeItem = (itemId) => {
    axios.delete(`/api/items/${itemId}`)
      .then( res => {
        let filterArray = this.state.items.filter( item => item.id !== res.data.id)
        this.setState({ items: [...filterArray]})
      })
  }

  setEdit = (item) => {
    this.setState({editing: item.id,
                   name: item.name,
                   description: item.description,
                   price: item.price
                 })
  }

  sendEdit = (itemId) => {
    axios.put(`/api/items/${itemId}`, { name: this.state.name,
                                         description: this.state.description,
                                         price: this.state.price })
     .then( res => {
       axios.get('/api/items')
         .then( res => {
           this.setState({items: res.data, editing: 0 })
           this.props.dispatch( setHeaders(res.headers) )
         })
     })
  }

  displayItem = () => {
    if (this.props.user.is_admin){
      return this.state.items.map( item => {
        if (this.state.editing === item.id){
          return (
            <Table.Row key={item.id}>
              <Table.Cell>
               <Input
                id='name'
                value={this.state.name}
                onChange={this.handleChange}
                />
              </Table.Cell>
              <Table.Cell>
               <TextArea
                id='description'
                value={this.state.description}
                onChange={this.handleChange}
                cols="45"
               />
             </Table.Cell>
             <Table.Cell>
               $<Input
                id='price'
                value={this.state.price}
                onChange={this.handleChange}
                type='number'
                step={0.01}
                />
             </Table.Cell>
             <Table.Cell>
               <Button onClick={() => this.sendEdit(item.id)}>
                Edit Item
               </Button>
               <Button onClick={() => this.removeItem(item.id)}>
                 Delete Item
               </Button>
             </Table.Cell>
           </Table.Row>
          )
        } else {
            return(
              <Table.Row key={item.id}>
                   <Table.Cell>
                     {item.name}
                   </Table.Cell>
                   <Table.Cell>
                     {item.description}
                   </Table.Cell>
                   <Table.Cell>
                     {item.price}
                   </Table.Cell>
                   <Table.Cell>
                     <Button onClick={ () => this.setEdit(item)}>
                      Edit Item
                     </Button>
                     <Button onClick={ () => this.removeItem(item.id)}>
                       Delete Item
                     </Button>
                   </Table.Cell>
                 </Table.Row>
            )
          }
      })
    }
    else {
      return this.state.items.map( item => {
        return (
           <Table.Row key={item.id}>
                <Table.Cell>
                {item.name}
                <br />
              <i> {item.description} </i>
                </Table.Cell>
                <Table.Cell>
                ${item.price}
                </Table.Cell>
                <Table.Cell>
             <Icon name='add' onClick={ () => this.addToCart(item.id)} style={styles.pointer} > </Icon>
                </Table.Cell>
                <Table.Cell>
                <Input type='number'/>
                </Table.Cell>
              </Table.Row>
        )
      })
    }
  }





  render() {
    if (this.props.user.is_admin){
      return(
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Menu</Header>
      <Container>
        <Table>
          <Table.Header >
            <Table.Row >
              <Table.HeaderCell style={styles.header}>Menu Name</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Description</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Price</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
           <Table.Body>
          {this.displayItem()}
          </Table.Body>
          </Table>
        </Container>
      </Segment>
      </div>
    )
    }
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Menu</Header>
      <Container>
        <Table>
          <Table.Header >
            <Table.Row >
              <Table.HeaderCell style={styles.header}>Menu Items</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Price</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Add to Cart</Table.HeaderCell>
              <Table.HeaderCell style={styles.header}>Quantity</Table.HeaderCell>
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
  header: {
    color: 'white',
    backgroundColor: 'black'
  },
  pointer: {
    cursor: 'pointer'
  },
  padding: {
    padding: '10px'
  }
}
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Menu);
