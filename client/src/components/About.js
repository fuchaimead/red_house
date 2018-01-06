import React, { Component } from 'react';
import { Header, Segment, Container, Image, Grid } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container> 
      <Segment basic> 
      <Header as='h1' textAlign='center'> Welcome to Red House</Header>
      <center> <i> authentic Sichuan and Chongqing style food in Salt Lake City </i></center>
      <Image src='/assets/images/wireframe/image.png' size='small' alt='salt lake city' />
      </Segment> 
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment> 
              <strong> Location </strong> 
              <p> Red House </p> 
              <p> 1465 S State St East Side </p>
              <p> Salt Lake City </p>  
              </Segment> 
            </Grid.Column>
            <Grid.Column>
            <Segment> 
              <strong> Hours </strong> 
              <p> Red House </p> 
              <p> 1465 S State St East Side </p>
              <p> Salt Lake City </p>  
              </Segment> 
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </Container> 

    );
  }
}

export default About;
