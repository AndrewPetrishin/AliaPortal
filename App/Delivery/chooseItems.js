/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title, ListItem, CheckBox, Item, Input} from 'native-base';
import {Keyboard } from 'react-native';

export default class ChooseItems extends Component {
    constructor(props){
        super(props);
        let text = this.props.type == "receiver"? "What you are need to delivery?" : "What you can delivery?";
        let dataStorage = this.props.navigation.state.params.dataStorage; 
        this.state = { title: text, document: false, items: false, description : "", kg: "", fromCountry: dataStorage.fromCountry, 
        toCountry: dataStorage.toCountry, fromDate:dataStorage.fromDate, toDate:dataStorage.toDate, type:dataStorage.type};
    }

    displayDescription(isShow){
        Keyboard.dismiss();
        return isShow? (
            <Content>
                <Item>
                    <Icon active name='home' />
                    <Input placeholder='Max kg' onChangeText={(text) => this.setState({kg : text})}/>
                </Item> 
                <Item>
                    <Icon active name='home' />
                    <Input placeholder='description' onChangeText={(text) => this.setState({description : text})}/>
                </Item>     
            </Content>            
        ): <Text/>;
    }

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
                    <Title>{this.state.title}</Title>
                </Body>
                <Right>
                    <Icon ios='ios-menu' android="md-cart" style={{fontSize: 20}}/>
                </Right>
            </Header>
            <Content>
               <Text style= {{ textAlign : "center"}}>{this.state.title}</Text>
               <ListItem>
                    <CheckBox checked={this.state.document} onPress = {() => {this.setState({document: !this.state.document});}}/>
                    <Body>
                        <Text>Documents</Text>
                    </Body>
                </ListItem>                
                <ListItem>
                    <CheckBox checked={this.state.items} onPress = {() => {
                        this.setState({items: !this.state.items});
                        }}/>
                    <Body>
                        <Text>Items</Text>
                    </Body>
                </ListItem>
                { this.displayDescription(this.state.items) }
                <Button onPress = {() => { nav('DeliveryWizard3', {dataStorage : this.state})}}>
                    <Text> To result </Text>
                </Button>
            </Content>        
        </Container>
        );
    }
}
