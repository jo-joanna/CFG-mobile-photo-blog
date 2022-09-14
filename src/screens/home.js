import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

export default function Home() {
    return (
        
      <ScrollView>
        <StatusBar style="auto" />
            <View style={styles.container}>
                <Text style={styles.title}>Welcome in my Mobile Photo Blog</Text>
                <Text style={styles.text}>My name is Joanna. I would like to invite you to travel with me across Spain. At the moment we're visiting Granada and Malaga.</Text>
                <Text style={styles.text}>Menu is intuitive. At the bottom, you will find icons to move to 3 main sections.</Text>
                <Text>- Home (we're here now) {'\n'}
                    - Gallery (you will have a menu with the destinations) {'\n'}
                    - Contact (you can ask me anything about an app and journeys! )
                </Text>
                <Image source={{uri: 'https://royaltrendia.com/wp-content/uploads/2018/07/travel-globe-uk-flights.png'}}
                    style={{width: 300, height: 250, alignItems: 'center'}}/>
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