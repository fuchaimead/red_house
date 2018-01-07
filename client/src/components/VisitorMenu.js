import React, { Component } from 'react';
import { Header, Segment, Table, Container } from 'semantic-ui-react';
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import Wallpaper from '../images/Wallpaper.jpg'

class Menu extends Component {

  state = { items: [],  name: '', price: '', description: '' }

  componentWillMount(){
    axios.get('/api/items')
      .then( res => {
        this.setState({items: res.data })
        this.props.dispatch( setHeaders(res.headers) )
      })
  }

  displayItem = () => {
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
    </Table.Row>
      )
    })
  }

  render() {
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
}
const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Menu);
