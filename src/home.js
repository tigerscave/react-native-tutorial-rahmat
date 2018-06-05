import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 


export default class Home  extends Component {
    render() {
        return(
            <View style={styles.container} >
                <Text style={styles.titleText} >Fucking Home page</Text>
            </View>
        )
    }
}

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
})