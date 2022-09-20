import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import PressMe from '../components/buttonReturn';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Main from '../home'
import Granada from '../screens/galleryGranada';
import Contact from '../screens/contact';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Comments from '../screens/comments';
import SignInScreen from '../screens/SignInScreen';



export default function Main() {
    
    return (
        
      <ScrollView>
        <StatusBar style="auto" />
            <View style={styles.container}>
                <Text style={styles.title}>Welcome in my Mobile Photo Blog</Text>
                <Text style={styles.text}>My name is Joanna. I would like to invite you to travel with me across Spain. At the moment we're visiting Granada and Malaga.</Text>
                <Text style={styles.text}>Menu is intuitive. At the bottom, you will find icons to move to 4 main sections.</Text>
                <Text style={styles.text}>- Home (we're here now) {'\n'}
                    - Gallery (at the moment Granada. More destination will be added soon) {'\n'}
                    - Feedback Cards {'\n'}
                    - Contact (you can ask me anything about an app and journeys! ) {'\n'}
                  Just below a photo on this page you have a button to log out.
                  
                </Text>
                <Image source={{uri: 'https://royaltrendia.com/wp-content/uploads/2018/07/travel-globe-uk-flights.png'}}
                    style={{width: 300, height: 250, alignItems: 'center'}}/>
                  <PressMe />
            </View>
  
      </ScrollView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB703',
      color: '#023047',
      alignItems: 'center',
      padding: 20,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 60,
    },
    text: {
        lineHeight: 25,
    },

  });