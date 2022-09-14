import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text>Welcome in my Mobile Photo Blog</Text>
        <Text>My name is Joanna. I would like to invite you to travel with me across Spain. At the moment we're visiting Granada and Malaga.</Text>
        <Text>Menu is intuitive. At the bottom, you will find icons to move to 3 main sections.</Text>
        
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'FFB703',
      color: '023047',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });