import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Wallpaper from '../images/Wallpaper.jpg';

class Home extends Component {
  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Red House Chinese Restaurant</Header>
        
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

export default Home;
