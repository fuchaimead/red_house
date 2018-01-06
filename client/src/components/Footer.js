import React, { Component } from 'react';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

       
       class Footer extends Component {
         render() {
          return (

         
       <div>
       <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>BitCoin</List.Item>
                    <List.Item as='a'>LockNess</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>The Earth is Flat</List.Item>
                    <List.Item as='a'>2+2=5</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Why is the sky blue?</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>We Hope...</Header>
                  <p>That you enjoy our humble attempt of a bird based social media website. </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}


export default Footer;