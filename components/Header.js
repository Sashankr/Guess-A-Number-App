import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Colors from "../constants/Colors";

const Header = ({heading}) => {
    return (
        <View style={styles.header}>
            <Text style ={styles.headerTitle}>{heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        width : '100%',
        height : 100,
        backgroundColor : Colors.primary,
        alignItems : 'center',
        justifyContent : 'center',
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
