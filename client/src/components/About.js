import React, { Component } from 'react';
import { Header, Segment, Container, Image, Grid } from 'semantic-ui-react';
import slc from '../images/salt-lake-city.jpg';
import Wallpaper from '../images/Wallpaper.jpg'



class About extends Component {
  render() {
    return (
      <div style={styles.image}>
      <Segment style={styles.opacity}>
      <Container>
      <Segment basic>
      <Header as='h1' textAlign='center'> Welcome to Red House</Header>
      <center> <i> authentic Sichuan and Chongqing style food in Salt Lake City </i></center>
      </Segment>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
      <Image src={slc} alt='salt lake city' style={styles.image} />
            </Grid.Column>
            <Grid.Column>
              <Segment >
              <strong> Location </strong>
              <p style={styles.p}> Red House </p>
              <p style={styles.p}> 1465 S State St East Side </p>
              <p style={styles.p}> Salt Lake City </p>
              </Segment>
              <Segment >
              <strong> About Us </strong>
              <p style={styles.p}> 在这里吃中国菜</p>
              <p style={styles.p}> 你不会饿在这里 </p>
              <p style={styles.p}> 盐湖城 </p>
              </Segment>
            <Segment>
              <strong> Hours </strong>
              <p style={styles.p}> Monday: 11:30am - 9:30pm </p>
              <p style={styles.p}> Tuesday: 5:00pm - 9:30pm </p>
              <p style={styles.p}> Wednesday: 11:30am - 9:30pm </p>
              <p style={styles.p}> Thursday: 11:30am - 9:30pm </p>
              <p style={styles.p}> Friday: 11:30am - 9:30pm </p>
              <p style={styles.p}> Saturday: 11:30am - 9:30pm </p>
              <p style={styles.p}> Sunday: 11:30am - 9:30pm </p>
              </Segment>
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
  },
  p: {
    margin: '0',
    padding:'0'
  }
}

export default About;
