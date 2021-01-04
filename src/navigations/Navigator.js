import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Details';


const stackNavigatorOptions = {
    headerShown: false
}

const appNavigator = createStackNavigator({
    Home: { screen: Home },
    Detail: { screen: Detail }
}, {
    defaultNavigationOptions: stackNavigatorOptions
});

export class Navigator extends Component {
    render() {
        return (
            <View>
                <Text>navigator</Text>
            </View>
        )
    }
}

export default NavigationContainer(appNavigator);