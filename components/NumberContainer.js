import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.selectedText}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    selectedText : {
        color : Colors.primary, 
        fontSize : 24,
        borderRadius : 10,
        borderColor : Colors.secondary,
        borderWidth : 2,
        padding : 20, 
    },
    container :{
        justifyContent : 'center',
        alignItems : 'center',
    }
})

export default NumberContainer
