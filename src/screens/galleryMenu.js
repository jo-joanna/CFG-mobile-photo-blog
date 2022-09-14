import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

export default function GalleryMenu() {
   
  
    return (
          <ScrollView>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Text style={styles.title}>Gallery Menu</Text>
                <Text style={styles.text}>My name is Joanna. I would like to invite you to travel with me across Spain. At the moment we're visiting Granada and Malaga.</Text>
                <Text style={styles.text}>Menu is intuitive. At the bottom, you will find icons to move to 3 main sections.</Text>
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