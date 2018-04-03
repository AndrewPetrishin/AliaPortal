/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title} from 'native-base';


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
            <Button full onPress={() => nav('DeliveryWizard1', { type: 'sender' })}>
                <Text>I can to delivery</Text>
            </Button>
            <Button full onPress={() => nav('DeliveryWizard1', { type: 'recipient' })}>
                <Text>I need to receive</Text>
            </Button>
        </Content>        
      </Container>
    );
  }
}