import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import wallpaper from '../images/Wallpaper.jpg'

class Home extends Component {
  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Home Component</Header>
      </Segment>
      </div>
    );
  }
}

const styles = {
  image: {
    backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/b/ba/Interior_of_Bang_Pa_In_Chinese_style_palace.JPG)",
    backgroundSize: "cover"
  },
  opacity: {
    backgroundColor: "rgba(200, 200, 200, .8)",
    height: "100vh"
  }
}

export default Home;
