import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import {Card} from 'react-native-paper';

import Card from '../components/commentCard';

export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state={
            List: [
                {name: 'Anna', com: '"This website is great!"', date: '25/02/2022'},
                {name: 'Ken', com: '"I recommend to go to Malaga"', date: '10/05/2022'},
                {name: 'Adam', com: '"It\'s a fantastic place"', date: '14/06/2022'},
                {name: 'Lee', com: '"This website is great!"', date: '15/05/2021'},
                {name: 'Eleonor', com: '"I am expecting more photos"', date: '15/09/2021'}
            ]
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                data={this.state.List}
                renderItem={({item}) =>
                    <Card>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.com}>{item.com}</Text>
                    </Card>
                }
                keyExtractor={item=>item.name}
                  
                />
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFB703',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 30,
    },
    com: {
        fontStyle: 'italic',
    },
    date:{
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
  });
