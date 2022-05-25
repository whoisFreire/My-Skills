import React from "react";
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        marginTop:20,
        borderRadius: 7,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

