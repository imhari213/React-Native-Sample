import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        Image
} from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style ={styles.container}>
               <Image style = {styles.logo} 
               source = {require('./../images/geofencing_logo.jpg')} />
               <Text  style={styles.logotext}>Geo-fencing</Text>
            
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    logo : {
        width : 40,
        height: 70
    },
    logotext : {
        fontSize : 18
    }
});
