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
                    <List.Item as='a'>
                      <a href='https://www.doordash.com/store/red-house-salt-lake-city-157765/' target="_blank">DoorDash</a>
                      </List.Item>
                    <List.Item as='a'>
                      <a href='https://www.yelp.com/biz/red-house-salt-lake-city' target="_blank">Yelp</a>
                      </List.Item>
                    <List.Item as='a'>
                      <a href='https://bitcointicker.co/' target="_blank">BitCoin</a>
                      </List.Item>
                    <List.Item as='a'>
                      <a href='https://en.wikipedia.org/wiki/Loch_Ness_Monster target="_blank'>LockNess</a>
                      </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>We</List.Item>
                    <List.Item as='a'>Serve</List.Item>
                    <List.Item as='a'>Food</List.Item>
                    <List.Item as='a'>Duh!</List.Item>
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