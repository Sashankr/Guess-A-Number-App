import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The game is over</Text>
            <Text>Number of rounds :{props.rounds}</Text>
            <Text>User Number : {props.userNumber}</Text>
            <Button title="New game" color={Colors.primary} onPress={props.resetGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
    }
})

export default GameOverScreen
