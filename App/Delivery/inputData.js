import React, { Component } from 'react';
import {  Platform,  StyleSheet, ImageBackground, Image } from 'react-native';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title, Item , Form,List, ListItem, Picker, Spinner,Input} from 'native-base';
import DatePicker from 'react-native-datepicker';
import Service from './apiService.js';

export default class DeliveryWizard extends Component {
    img_top_bg = require('./images/bg-top.png');

    constructor(props){
        super(props);
        var {type, textUnderLogo, top_logo, logo_w, logo_h} = this.props.navigation.state.params;
        this.countries();              
        this.state = {Loading : true, currentDay : new Date(), fromCountry:"", toCountry:"", fromDate:"", toDate:"", type: type, 
        top_logo: top_logo, textUnderLogo : textUnderLogo, logo_w : logo_w, logo_h : logo_h};                   
    }

    countries = async () => {        
        let api = new Service();
        let res = await api.getCountries();
        this.setState({countries : res, Loading:false});
    };

    onValueChangeToCountry(value) {
        this.setState({
            toCountry : value
        });
    }

    onValueChangeFromCountry(value) {
        this.setState({
            fromCountry : value
        });
    }

    
    updateDropdown(){
        const all_items = this.state.countries ? this.state.countries.map((country, index) => {
                return (
                    <Picker.Item key={index} label={country} value={country} />
                )
        }) : [];
        return all_items;
  }

   datePicker(dateState, minDate = new Date(), isFromDate = true) {
    return (
        <DatePicker
            date={dateState}
            mode="date"
            format="DD.MM.YYYY"
            minDate={minDate}            
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            hideText
            customStyles={{
                dateIcon: {
                  position:'absolute',
                  top: 10,
                  left: 0,
                }
            }}
            onDateChange = {(date) =>  { 
                if(isFromDate) {
                    this.setState({ fromDate : date})
                }
                else {
                    this.setState({ toDate : date})
                }
        }}/> 
        );
   }

   returnData(){
    let res = {fromCountry: this.state.fromCountry, toCountry:this.state.toCountry, fromDate:this.state.fromDate, toDate:this.state.toDate, type:this.state.type};
    console.log(res);
    return res;
   }

   toogleSpinner(){
        if(this.state.Loading) {
            return (
                <Container style={styles.spinnerContainer}>
                    <Spinner color='blue' />
                </Container>
            );                        
        }    
        return (
            <Container style={styles.formContainer}>
            <Form>
                <Text>FROM</Text>
                <Container style={{flexDirection:'row', justifyContent:"flex-start", alignItems:"flex-start"}}>   
                    <Item regular style={{width : '80%'}}>                 
                        <Input placeholder="Select country" onValueChange = {this.onValueChangeFromCountry.bind(this)} style={styles.inputBox}/>              
                    </Item>                    
                    { this.datePicker(this.state.fromDate) }                    
                </Container>
                <Text>TO</Text>
                <Container style={{flexDirection:'row', justifyContent:"flex-start", alignItems:"flex-start"}}>   
                    <Item regular style={{width : '80%'}}>                 
                        <Input placeholder="Select country" onValueChange = {this.onValueChangeToCountry.bind(this)} style={styles.inputBox}/>              
                    </Item>                    
                    { this.datePicker(this.state.fromDate, this.state.currentDay + this.state.fromDate, false) }                    
                </Container>                                  

                <Container style={{flexDirection:'column', justifyContent:"center", alignItems : 'center', alignContent : 'center'}}>
                    <Button onPress={() => nav('DeliveryWizard2', { dataStorage : this.returnData()})}>
                        <Text>Next step</Text>
                    </Button>  
                </Container>  
            </Form>         
            </Container>
        );
   }

    render() {
        let nav = this.props.navigation.navigate;      
        return (
            <Container style={styles.mainContainer}>
                <ImageBackground source={this.img_top_bg} style={styles.mainBackground}/>
                <Container style={styles.logoContainer}>
                    <Image source={this.state.top_logo} style={{width: this.state.logo_w, height: this.state.logo_h}}/> 
                    <Text style={styles.textUnderLogo}>{this.state.textUnderLogo}</Text>
                </Container>                
                {this.toogleSpinner()}           
            </Container>
            )
        }    
}

const styles = StyleSheet.create({
    mainContainer :{
        backgroundColor : 'white'
    },    
    logoContainer :{
        flex:1,
        marginTop:30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent : 'flex-start',
    },
    mainBackground :{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 250
    },
    spinnerContainer: {
        flex:2,
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent : 'center'
    },
    formContainer :{
        flex:2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent : 'flex-start',
        margin: 30
    },
    textUnderLogo : {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop:20,
        textAlign : 'center',
        flexWrap:'wrap'
    },
    inputBox : {
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