import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions, ScrollView,Platform} from 'react-native'

import Colors from '../constants/Colors'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <BodyText style={styles.title}>The game is over</BodyText>
            <View style={styles.imageContainer}>
             <Image fadeDuration={300} style={styles.image} resizeMode="cover" source={require('../assets/success.png')}/>
            </View>
            <BodyText style={styles.message}> Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            <MainButton color={Colors.secondary} onPress={props.resetGame}>New game</MainButton>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        paddingVertical : 20,
    },
    title : {
        fontSize : 22,
        fontFamily : 'Inter-Bold',
        textTransform : 'uppercase',
        marginVertical : Dimensions.get('window').height / 50,
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
        width : Dimensions.get('window').width * 0.5,
        height : Dimensions.get('window').width * 0.5,
        borderRadius : Dimensions.get('window').width * 0.5 / 2,
        borderWidth : 4,
        borderColor : Colors.secondary,
        overflow : 'hidden',
        justifyContent : 'center',
        alignItems : 'center',
    },

    highlight : {
        color : Platform.OS === 'ios'?Colors.secondary : Colors.primary,
        fontFamily : 'Inter-Bold',
    },
    message :{
        marginVertical : Dimensions.get('window').height / 20,
        fontSize : 18,
        textAlign : 'center'
    }


})

export default GameOverScreen
