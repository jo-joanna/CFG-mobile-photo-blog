import * as React from 'react';
import { StyleSheet, Text, Pressable, Alert } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

// function write() {alert('Hello')}



export default function PressMe(){
    console.log("This button was pressed!");
    const navigation = useNavigation();

    return (
      <Pressable style={style.buttonStyle} onPress={()=>navigation.navigate('Sign In')}>
        <Text style={{fontWeight: 'bold'}}> Sign Out </Text>
      </Pressable>
    )
};


const style = StyleSheet.create({
buttonStyle:{
  backgroundColor: '#FB8500',
  color: '#023047',
  marginTop: 100,
  marginLeft: 10,
  marginRight: 20,
  padding: 20,
  overflow: "hidden",
  marginBottom: 10,
},
});