import React from 'react'
import { View , Text , Button, TextInput ,StyleSheet} from 'react-native'
import Card from '../components/Card'

import Colors from "../constants/Colors";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>  
            <Text style={styles.startNew}>Start a New Game!</Text>
            
            <Card style={styles.inputContainer}>
                <Text style={styles.selectNumberTitle}>Select a Number</Text>
                <TextInput placeholder="Enter input"/>
                <View style = {styles.buttonContainer}>
                    <View style={styles.button}>
                     <Button title="Reset" color={Colors.secondary} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-start',
        padding : 10,
    },
    startNew : {
        marginVertical : 10,
    },
   inputContainer: {
        width : 300,
        maxWidth : '80%',
        alignItems : 'center',
   },   
    selectNumberTitle : {
        fontSize : 22,
        fontWeight : '600',
    },  
    buttonContainer : {
        marginVertical : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '80%'
    },
        button : {
            width : 100,
        },
})

export default StartGameScreen
