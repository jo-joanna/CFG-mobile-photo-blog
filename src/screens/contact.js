import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Form from '../components/form';


const Contact = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
   
      <Form />
  </View> 
);


const styles = StyleSheet.create({
container: {
  flex: 1,
},

});
export default Contact;

