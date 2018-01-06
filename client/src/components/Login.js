import React, { Component } from 'react';
import { Header, Segment, Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import Wallpaper from '../images/Wallpaper.jpg';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <Container>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            /> </Container>
          </Form.Field>
          <Form.Field>
          <Container>
            <label htmlFor='password'>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            /></Container>
          </Form.Field>
          <Segment textAlign='center' basic>
          <Button color='yellow'>Submit </Button>

          </Segment>
        </Form>

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

export default connect()(Login);
