import React,{ useState } from 'react'
import { View , Text , Button, TouchableWithoutFeedback, Keyboard ,StyleSheet} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input';

import Colors from "../constants/Colors";

const StartGameScreen = () => {

    const [userInputNumber,setUserInputNumber] = useState('');
    const [isConfirmed,setIsConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();

    const handleUserNumberInput = (userInput)=>{
        setUserInputNumber(userInput.replace(/[^0-9]/g,''));
    }

    const handleReset = ()=>{
        setUserInputNumber('');
        setIsConfirmed(false)
    }

    const handleConfirm = () => {
        const chosenNumber = parseInt(userInputNumber);

        if(chosenNumber === NaN || chosenNumber <=0 || chosenNumber>=99){
            return;
        }

        setIsConfirmed(true)
        setSelectedNumber(chosenNumber)
        setUserInputNumber('');
    }

    let confirmedOutput;

    if(isConfirmed){
        confirmedOutput = <Text>Chosen Number : {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>  
            <Text style={styles.startNew}>Start a New Game!</Text>
            
             <Card style={styles.inputContainer}>
                <Text style={styles.selectNumberTitle}>Select a Number</Text>

                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect ={false} keyboardType ="number-pad" maxLength={2} onChangeText={handleUserNumberInput} value={userInputNumber} />

                <View style = {styles.buttonContainer}>

                    <View style={styles.button}>
                     <Button title="Reset" color={Colors.secondary} onPress={handleReset} />
                    </View>

                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={handleConfirm} />
                    </View>

                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
    input : {
        width : 50,
        textAlign : 'center',
    }
})

export default StartGameScreen
