import React from 'react'
import {View,Button,Text,StyleSheet,Image} from 'react-native'

import Colors from '../constants/Colors'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <BodyText style={styles.title}>The game is over</BodyText>
            <View style={styles.imageContainer}>
             <Image fadeDuration={300} style={styles.image} resizeMode="cover" source={require('../assets/success.png')}/>
            </View>
            <BodyText style={styles.message}> Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            <MainButton color={Colors.secondary} onPress={props.resetGame}>New game</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
    },
    title : {
        fontSize : 22,
        fontFamily : 'Inter-Bold',
        textTransform : 'uppercase',
        marginVertical : 30,
    },
    rounds : {
        fontSize : 18,
        marginVertical : 10,
    },
    user : {
        fontSize : 16,
        marginVertical : 20,
        fontFamily : 'Inter-SemiBold',
    },
    image : {
        width : '100%',
        height : '100%',
        },
    imageContainer : {
        width : 300,
        height : 300,
        borderRadius : 1000,
        borderWidth : 4,
        borderColor : Colors.secondary,
        overflow : 'hidden',
        justifyContent : 'center',
        alignItems : 'center',
    },

    highlight : {
        color : Colors.primary,
        fontFamily : 'Inter-Bold',
    },
    message :{
        marginVertical : 20,
        fontSize : 18,
        textAlign : 'center'
    }


})

export default GameOverScreen
