import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        TextInput,
        Button,
        TouchableOpacity
} from 'react-native';



export default class Loginform extends Component {
    render() {
        return (
            <View  style ={styles.container}>  
             <TextInput style = {styles.input}
               placeholder = "Employee Id"
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#FFFFFF"/>       
            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}>
                    Sign In
                </Text>

            </TouchableOpacity>         
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       },
    inputBox : {
        width : 300,
        backgroundColor : 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25
    },
    button : {
        width : 300,
        backgroundColor : '#7D7676',
        borderRadius: 25,
        marginVertical : 10,
    },
    buttonText : {
        fontSize :  22,
        fontWeight : '500',
        marginVertical : 10,
        textAlign: 'center'
    },
    input: {
        width:300,
        backgroundColor : '#7D7676',
        paddingHorizontal : 16,
        fontSize : 22,
        borderRadius: 25,   

     }
});