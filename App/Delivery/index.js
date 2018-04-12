/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class HomePage extends Component {
  render() {
    var nav =  this.props.navigation.navigate;
    return (
      <Container>
        <Header backgroundColor = "#fefefe">
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body backgroundColor="">
                <Title>Delivery</Title>
            </Body>
            <Right>
                <Icon ios='ios-menu' android="md-cart" style={{fontSize: 20}}/>
            </Right>
        </Header>
        <Content>
            <Grid>
                <Col style={{ backgroundColor: '#635DB7'}}>
                    <Button full onPress={() => nav('DeliveryWizard1', { type: 'sender' })}>
                        <Text>I can to delivery</Text>
                    </Button>
                </Col>
                <Col style={{ backgroundColor: '#00CE9F'}}>
                    <Button full onPress={() => nav('DeliveryWizard1', { type: 'recipient' })}>
                        <Text>I need to receive</Text>
                    </Button>
                </Col>
            </Grid>
            
            
        </Content>        
      </Container>
    );
  }
}