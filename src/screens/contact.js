import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, useWindowDimensions, ScrollView} from 'react-native';
import { WebView} from 'react-native-webview';


export default function Contact() {
  const contentWidth = useWindowDimensions().width;

  return (
        <ScrollView>
            <StatusBar style="auto" />
            <SafeAreaView style={{flex: 1}}>          
                <WebView source={{ uri: 'https://mobilecontact.netlify.app/' }} contentWidth={contentWidth}/>        
            </SafeAreaView>
        </ScrollView>  
  );
}
