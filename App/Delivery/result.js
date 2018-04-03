import React, { Component } from 'react';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title} from 'native-base';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        let dataStorage = this.props.navigation.state.params.dataStorage;                        
        console.log(dataStorage);
    }


    showItemsDetails(isShow, desc, kg){
        return isShow? (
        <Content>
            <Text>Description : {desc}</Text>
            <Text>Kilogramm : {kg}</Text>
        </Content>
        ):<Text/>
    }

    showBoolean(text , value){        
        if(value) return (
            <Text>{text} : Yes</Text>
        )
        return  ( <Text>{text} : No</Text>);}

   render() {
      var nav =  this.props.navigation.navigate;
      const {fromCountry, toCountry, fromDate, toDate, document, items, description, kg} = this.props.navigation.state.params.dataStorage;
    return (
      <Container>
        <Header backgroundColor = "#fefefe">
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body backgroundColor="">
                <Title>Result</Title>
            </Body>
            <Right>
                <Icon ios='ios-menu' android="md-cart" style={{fontSize: 20}}/>
            </Right>
        </Header>
        <Content>
            <Text>Your choise:</Text>
            <Text> From : {fromCountry} </Text>
            <Text> To : {toCountry} </Text>
            <Text> From date: {fromDate} </Text>
            <Text> To date: {toDate} </Text>
            { this.showBoolean("Documents", document)}
            { this.showBoolean("Items", items)}
            { this.showItemsDetails(items, description, kg)}           
            <Button full onPress={() => nav('Delivery')}>
                <Text>Back to main menu</Text>
            </Button>           
        </Content>        
      </Container>
    );
  }
}