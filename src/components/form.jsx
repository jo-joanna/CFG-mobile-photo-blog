import React from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import { WebView} from 'react-native-webview';

export default function Form() {
    const contentWidth = useWindowDimensions().width;
  
    return (
            <SafeAreaView style={{flex: 1}}>          
                <WebView source={{ uri: 'https://contact-mobile-photo-blog.netlify.app/' }} contentWidth={contentWidth}/>        
            </SafeAreaView>
           
    );
  }