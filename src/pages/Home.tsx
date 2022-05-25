import React, { useState, useEffect } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Platform
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
    id: string;
    title:String;
}


export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greeting, setGreeting] = useState('')

    const handleAddNewSkill = () => {

        const data = {
            id: String(new Date().getTime()),
            title: newSkill,
        }

        setMySkills(oldState => [...oldState, data])
    }


    useEffect(() => {
        const currentHour = new Date().getHours()

        if(currentHour >= 5 && currentHour < 12) {
            setGreeting('Good Morning')
        }else if(currentHour >= 12 && currentHour <= 18) {
            setGreeting('Good afternoon')
        }else {
            setGreeting('Good evening')
        }
    }, [])
    return (
        <View style={styles.container}>
            <Text 
                style={styles.title}
            >
                Welcome, Leonardo
            </Text>

            <Text style={styles.greeting}>{greeting}</Text>

            <TextInput 
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} title={'Adicionar'}/>

            <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>

            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <SkillCard skill={item.title} />
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical:70, 
        backgroundColor: '#121015'
    },
    title: {
        color: '#fff',
        fontSize:22,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        padding: Platform.OS === 'ios' ? 15 : 10,
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7
    },
    greeting: {
        color: '#fff',
        marginTop: 2
    }

})