import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/commentCard';

export default function Comments({navigation}){

    const [reviews, setReviews] = useState([
        {name: 'Anna', com: '"This website is great!"', date: '25/02/2022'},
        {name: 'Ken', com: '"I recommend to go to Malaga"', date: '10/05/2022'},
        {name: 'Adam', com: '"It\'s a fantastic place"', date: '14/06/2022'},
        {name: 'Lee', com: '"This website is great!"', date: '15/05/2021'},
        {name: 'Eleonor', com: '"I am expecting more photos"', date: '15/09/2021'},
    ])
    return(
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <Card>
                        <Text style={styles.name}>{item.name}{item.date}</Text>
                        <Text style={styles.com}>{item.com}</Text>
                    </Card>
                   
                )}
                />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFB703'},
    name: {
        fontWeight: 500,
    },
    com: {
        fontStyle: 'italic',
    },
    date:{
        fontWeight: 700,
        alignSelf: 'flex-end',
    },
  });

//   <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
//   <Card>
//       <Text style={styles.name}>{item.name}{item.date}</Text>
//       <Text style={styles.com}>{item.com}</Text>
//   </Card>

// </TouchableOpacity>