import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Select, Option } from 'react-native-chooser'; 
import { createBottomTabNavigator } from 'react-navigation'; 
import HomeScreen from './src/home'

const data = [
  {
    name: "Adania", 
    age: "25", 
    position: "leader",
  }, 
  {
    name: "Sonoda", 
    age: "23", 
    position: "manager",
  }, 
  {
    name: "Rahmat", 
    age: "27", 
    position: "backend engineer",
  }, 
]

class SelectUser extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      selectUser: data[0],
    }
  
  this.handleSelectUser = (e) => { 
    const selectUserName = data.filter(d => d.name === e)[0]; 

    this.setState({
      selectUser: selectUserName, 
    })


  }
      
  }
  render() {
    const { selectUser } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello World</Text>
        <Select 
          defaultText = {this.state.name}
          onSelect={this.handleSelectUser}>
          {data.map((d, index) => 
            <Option
              key={index}
              value={d.name}
            >{d.name}</Option>
          )}
        </Select>
        <Text>User Info</Text>
        <Text>name: {selectUser.name}</Text>
        <Text>age: {selectUser.age}</Text>
        <Text>position: {selectUser.position}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return <AppBottonNavigation />
  }
}

const AppBottonNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  }, 
  SelectUser: {
    screen: SelectUser, 
  }, 
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: "blue",
    fontSize: 30,

  }
});
