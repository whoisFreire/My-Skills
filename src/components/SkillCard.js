import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function SkillCard({skill}) {
    return (
        <TouchableOpacity style={styles.skillButton}>
            <Text style={styles.skillText}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillButton: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5
    },
    skillText: {
        color: '#fff',
        fontSize:22,
        fontWeight: 'bold'
    }
})