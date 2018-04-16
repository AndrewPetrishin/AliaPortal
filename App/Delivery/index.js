import React, { Component } from 'react';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title} from 'native-base';
import {ImageBackground, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class MainWizard extends Component {
    img_top_bg = require('./images/bg-top.png');
    img_jet = require('./images/jet.png');
    img_box = require('./images/box.png');
    textDelivery = "I can delivery";
    textReceiver = "I need to receive";

    render() {       
        var nav =  this.props.navigation.navigate;
        return (
        <Container style={styles.mainContainer}>
            <ImageBackground source={this.img_top_bg} style={styles.mainBackground}/>  
            {/* <Header backgroundColor = "#fefefe">
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
            </Header> */}
            <Container style={styles.container}>         
                    <TouchableOpacity onPress={() => nav('DeliveryWizard1', { type: 'sender', top_logo: this.img_jet, textUnderLogo : this.textDelivery, logo_w: 134, logo_h:135 })} style={styles.button}>     
                        <Image source={this.img_jet} style={styles.buttonImage}/>
                        <Text style={styles.buttonText}>{this.textDelivery}</Text>                  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav('DeliveryWizard1', { type: 'recipient', top_logo: this.img_box, textUnderLogo : this.textReceiver, logo_w: 158, logo_h:120  })} style={styles.button} containerViewStyle = {{width: '100%'}}>
                        <Image source={this.img_box}  style={styles.buttonImage}/>
                        <Text style={styles.buttonText}>{this.textReceiver}</Text>
                    </TouchableOpacity>
                </Container> 
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer :{
        backgroundColor : 'white'
    },
    mainBackground :{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 250
    },
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent : 'center',
    },
    button: {
      margin: 20,
      padding: 20,
      width : '60%',
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonImage  :{     
        margin : 20,
    },    
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })