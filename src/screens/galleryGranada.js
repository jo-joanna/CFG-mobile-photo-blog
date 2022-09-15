import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button } from 'react-native';

export default function Granada() {

    return (
        <ScrollView style={{backgroundColor: '#FFB703'}}>
            <View style={styles.containerImagesText}>  
                    <Text style={styles.subtitle}>Granada</Text>
                    <Image source={{uri: 'https://media.istockphoto.com/photos/ancient-arabic-fortress-of-alhambra-granada-spain-picture-id532188731?k=20&m=532188731&s=612x612&w=0&h=Jj98gT0K4UFt2PzCDt1XtzmDH8rCtIjtHpOtyF16KXg='}}
                    style={styles.boxImage}/>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Granada%2C_Spain._HDR_Panorama.jpg'}}
                    style={styles.boxImage}/>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Granada_from_above.jpg'}}
                    style={styles.boxImage}/>
                </View>
        </ScrollView>
    )};

    const styles = StyleSheet.create({
    
        containerImagesText: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 20,
        },

        subtitle: {
            fontSize: 15,
            textDecorationLine: 'underline',
            paddingTop: 10,
            paddingLeft: 20,
            paddingBottom: 10,
            alignSelf: 'flex-start',
            fontWeight: 'bold',
        },
        
        boxImage: {
            width: 250,
            height: 300,
            marginBottom:20,
        },
      });