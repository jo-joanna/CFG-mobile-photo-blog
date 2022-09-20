import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text, type='primary'}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`input_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 10,

        paddingHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
    },

    container_primary: {
        backgroundColor: 'darkorange',
    },

    container_TERTIARY: {},

    container_secondary: {
        borderColor: 'darkorange',
        borderWidth: 2,
    },

    input_primary: {
        fontWeight: 'bold', 
    },
    
    input_TERTIARY: {
        color: 'grey',
        fontWeight: 'bold', 
    },
});

export default CustomButton;
