import React from 'react'
import { Text, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'

const BodyText = (props) => {
    return (
        <Text style={{...styles.body,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    body : {
        fontFamily : 'Inter-Regular',
        color : Colors.primary, 
    }
})

export default BodyText
