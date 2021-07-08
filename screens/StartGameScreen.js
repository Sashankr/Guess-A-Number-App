import React,{ useState } from 'react'
import { 
    View , 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet, 
    Alert
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from "../constants/Colors";

const StartGameScreen = (props) => {

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

        if(chosenNumber === NaN || chosenNumber <=0 || chosenNumber>99){
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99',
            [{text:'Okay',style:'destructive',onPress : handleReset}] 
            )
        }

        setIsConfirmed(true)
        setSelectedNumber(chosenNumber)
        setUserInputNumber('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if(isConfirmed){
        confirmedOutput = <View>
            <BodyText style={styles.selectedText}>You selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <View style={styles.start}>
                <MainButton  color={Colors.primary} onPress={()=> props.onStartGame(selectedNumber)} >Start Game</MainButton>
            </View>
        </View>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>  
            <BodyText style={styles.startNew}>Start a New Game!</BodyText>
            
             <Card style={styles.inputContainer}>
                <BodyText style={styles.selectNumberTitle}>Select a Number</BodyText>

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
        fontFamily : 'Inter-Regular',
        fontSize : 22,
        letterSpacing : 4,
        textTransform :'capitalize',
    },
   inputContainer: {
        width : 300,
        maxWidth : '80%',
        alignItems : 'center',
   },   
    selectNumberTitle : {
        fontSize : 21,
        fontWeight : '600',
        fontFamily : 'Inter-Regular',
        letterSpacing : 1,
        textTransform : 'uppercase',
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
    },
    start : {
        marginVertical : 20,
        fontFamily : 'Inter-Bold',
    },
    selectedText : {
        marginVertical : 20,
        fontSize : 22,
        textTransform : 'uppercase',
        letterSpacing : 2,
    }
})

export default StartGameScreen
