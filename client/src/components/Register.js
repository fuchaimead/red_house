import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import Wallpaper from '../images/Wallpaper.jpg';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', isAdmin: false };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, passwordConfirmation, isAdmin } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(email, password, passwordConfirmation, isAdmin, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  toggleAdmin = () => {
    this.setState({ isAdmin: !this.state.isAdmin })
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (

      <div style={styles.image}>
      <Segment style={styles.opacity}>



        <Header as='h1' textAlign='center'>Register Component</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <Container>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            /></Container>
          </Form.Field>
          <Form.Field>
          <Container>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
            </Container>
          </Form.Field>
          <Form.Field>
          <Container>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
            </Container>
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
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

export default connect()(Register);
