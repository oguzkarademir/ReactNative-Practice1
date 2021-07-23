import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff00ff',
        padding:10,
        margin:10,
        alignItems:'center',
        borderRadius:10
    },
    text: {
        fontSize:20,
        fontWeight: 'bold'
    }
})