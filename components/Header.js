import React from 'react'
import {View,Text,StyleSheet,Platform} from 'react-native'
import Colors from "../constants/Colors";

const Header = ({heading}) => {
    return (
        <View style={{...styles.headerBase,...Platform.select({
            android : styles.headerAndroid,
            ios : styles.headerIOS,
        })}}>
            <Text style ={styles.headerTitle}>{heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase :{
        width : '100%',
        height : 100,
        alignItems : 'center',
        justifyContent : 'center',
    },
    headerIOS : {
        backgroundColor : Colors.primary,
    },
    headerAndroid : {
        backgroundColor : '#000',
    },

    headerTitle : {
        color : Colors.secondary,
        fontSize : 22,
        letterSpacing : 4,
        fontFamily : 'Inter-Regular',
        textTransform : "uppercase",
    }
});

export default Header
