import React,{ useState, useRef, useEffect  } from 'react'
import {View,Text,StyleSheet,Button,Alert} from 'react-native'

import BodyText from '../components/BodyText';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }
    else{
        return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice))
    const [rounds,setRounds] = useState(0);

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice,onGameOver} = props

    useEffect(()=>{
        if(currentGuess === props.userChoice){
            props.onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver])


    const nextGuessHandler = direction =>{
         if((direction === 'lower' && currentGuess < props.userChoice) || (direction ==='greater' && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie!', 'You know this is wrong...',[{text:'Sorry!',style :'cancel'}]);
            return; 
         }
         if(direction === 'lower'){
             currentHigh.current = currentGuess;
         }
         else{
             currentLow.current = currentGuess;
         }
        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds +1);
    }
    let success;
    if(currentGuess === props.userChoice){
        success = <Text>{currentGuess} is the choice you selected!!!</Text>
    }

    return (
        <View style={styles.screen}>
            <BodyText style={styles.guess}>Computer's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={ nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this,'greater')}>
                <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            {success}
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems  : 'center',
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,
        width : 500,
        maxWidth : '90%',
    },
    guess : {
        marginVertical : 20,
        fontSize : 21,
        fontStyle : 'italic',
        textTransform : 'uppercase',
    }
}) 

export default GameScreen
