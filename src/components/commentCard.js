import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
                </View></View>
    )
}

const styles=StyleSheet.create({
    card: {
        elevation: 3,
        backgroundColor: '#FB8500',
        shadowOffset: {width: 3, height: 1},
        shadowColor: '#FB8500',
        shadowOpacity: 0.2,
        margin: 25,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }

})