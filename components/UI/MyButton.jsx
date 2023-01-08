import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.myButton}>
            <Text style={styles.myButtonTxt}>{children}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    myButton: {
        padding: 8,
        backgroundColor: "#579BB1",
        minWidth: 100,
        borderWidth: 1,
        borderColor: "#579BB1",
        borderRadius: 6,
    },
    myButtonTxt: {
        fontSize: 16,
        color: "#fff",
        textAlign: 'center',
    }
})