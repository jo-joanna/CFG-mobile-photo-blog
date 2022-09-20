import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
// import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from '../screens/BottomNavigation';


const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Sign In'} >
            
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Confirm an email" component={ConfirmEmailScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
                <Stack.Screen name="New Password" component={NewPasswordScreen} />
                <Stack.Screen name="Main" component={BottomNavigation} />
                
                
            </Stack.Navigator>
       
    );
};

export default StackNavigation;

