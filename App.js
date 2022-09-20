import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/StackNavigation';


export default function App() {
    return (
        <NavigationContainer style={{flex: 1}}>
            <StatusBar style="auto" />
             <StackNavigation />

        </NavigationContainer>
    );
};

