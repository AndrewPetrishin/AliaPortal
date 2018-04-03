import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {Container, Header, Text, Footer, Button, Right, Icon, Content, Left, Body, Title, Item as FormItem, Form,List, ListItem, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        let currentDay = new Date();
        let countries = [{key: 1, label: "Tel Aviv"}, {key: 2, label: "Kyiv"}, {key: 3, label: "Moscow"}];        
        this.state = {currentDay : currentDay, countries : countries, fromCountry:"", toCountry:"", fromDate:"", toDate:"", type: this.props.navigation.state.params.type};              
    }

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
        const all_items = this.state.countries.map((country, i) => {
          return (
              <Picker.Item key={i} label={country.label} value={country.label} />
            )
         });
         return all_items;
  }

   datePicker(title, dateState, minDate = new Date(), isFromDate = true) {
    return (
        <Content>
            <Text>{title}</Text>
            <DatePicker style={{flex: 1, width: 200}}
                date={dateState}
                mode="date"
                placeholder="select date"
                format="DD.MM.YYYY"
                minDate={minDate}            
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
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
        </Content> 
        );
   }

   returnData(){
    let res = {fromCountry: this.state.fromCountry, toCountry:this.state.toCountry, fromDate:this.state.fromDate, toDate:this.state.toDate, type:this.state.type};
    console.log(res);
    return res;
   }

    render() {
        let nav = this.props.navigation.navigate;      
        return (
        <Container>
             <Header backgroundColor = "#fefefe">
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body backgroundColor="">
                <Title>Input your DATA</Title>
            </Body>
            <Right>
                <Icon ios='ios-menu' android="md-cart" style={{fontSize: 20}}/>
            </Right>
        </Header>
            
            <Content>
                
                <Form>
                    <Text>From </Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select country FROM"
                        iosHeader="Select country FROM"
                        note={false}
                        selectedValue={this.state.fromCountry}
                        onValueChange={this.onValueChangeFromCountry.bind(this)}
                        >
                        { this.updateDropdown() }
                    </Picker>     
                    <Text>To </Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select country FROM"
                        iosHeader="Select country FROM"
                        note={false}
                        selectedValue={this.state.toCountry}
                        onValueChange={this.onValueChangeToCountry.bind(this)}
                        >
                        { this.updateDropdown() }
                    </Picker>          
                  
                    { this.datePicker("From date", this.state.fromDate) }
                    { this.datePicker("To date", this.state.toDate, this.state.currentDay + this.state.fromDate, false) }
            
                    <Button onPress={() => nav('DeliveryWizard2', { dataStorage : this.returnData()})}>
                        <Text>Next step</Text>
                    </Button>    
                </Form>                
            </Content>           
        </Container>
        );
    }
}
