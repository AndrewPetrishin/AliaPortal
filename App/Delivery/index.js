/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title} from 'native-base';


export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header backgroundColor = "#fefefe">
            {/* <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
            </Left> */}
            <Body backgroundColor="">
                <Title>Delivery</Title>
            </Body>
            {/* <Right>
                <Icon ios='ios-menu' android="md-cart" style={{fontSize: 20}}/>
            </Right> */}
        </Header>
        <Content>
            <Button full >
                <Text>I can to delivery</Text>
            </Button>
            <Button full >
                <Text>I need to receive</Text>
            </Button>
        </Content>        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
