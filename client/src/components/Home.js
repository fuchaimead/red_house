import React, { Component } from 'react';
import { Header, Segment, Grid, Image, Container } from 'semantic-ui-react';
import Wallpaper from '../images/Wallpaper.jpg';
import food1 from '../images/food1.jpg'
import food2 from '../images/food2.jpg'
import food3 from '../images/food3.jpg'
import food4 from '../images/food4.jpg'
import food5 from '../images/food5.jpg'
import food6 from '../images/food6.jpg'
import food7 from '../images/food7.jpg'

class Home extends Component {
  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>Red House Chinese Restaurant</Header>
      <Header as='h3' textAlign='center'>Enjoy delicious chinese food in Salt Lake City. Now you can <a href='http://localhost:3000/menu'> order online. </a> </Header>
        <Container> 
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
              <Image src={food1} alt='food' />
              <Image src={food2} alt='food' />

              </Grid.Column>
              <Grid.Column>
              <Image src={food6} alt='food' />
              <Image src={food3} alt='food' />
              </Grid.Column>
              <Grid.Column>
              <Image src={food4} alt='food' />
              <Image src={food5} alt='food' />
              <Image src={food7} alt='food' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
  }
}

export default Home;
