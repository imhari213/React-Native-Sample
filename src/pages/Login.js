import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        StatusBar
} from 'react-native';
import Logo from './../components/Logo';
import Loginform from './../components/Loginform';

export default class Login extends Component {
    render() {
        return (
            <View style ={styles.container}>
                 <Logo/>
                 <Loginform/>
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
}
)