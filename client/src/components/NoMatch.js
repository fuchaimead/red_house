import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Cookie from '../images/fortunecookie.jpg'

class NoMatch extends Component {
  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
  
      </Segment>

      </div>



    );
  }
}

const styles = {
  image: {
    backgroundImage: "url("+ Cookie + ")",
    backgroundSize: "cover"
  },
  opacity: {
    backgroundColor: "rgba(200, 200, 200, 0)",
    height: "100vh"
  }
}


export default NoMatch;
