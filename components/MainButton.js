import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,TouchableNativeFeedback,Platform } from 'react-native'

import Colors from '../constants/Colors'

const MainButton = (props) => {

    let ButtonComponent = TouchableOpacity

    if(Platform.OS === 'android' && Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({

    buttonContainer : {
        overflow : 'hidden',
        borderRadius : 25,
    },

    button : {
        backgroundColor : Colors.primary,
        paddingVertical : 12,
        paddingHorizontal : 30,
        borderRadius : 30,
    },
    buttonText :{
        color : '#fff',
        fontSize : 16,
        fontFamily : 'Inter-Bold',
        textTransform : 'uppercase',
        textAlign : 'center'
    }
})

export default MainButton
