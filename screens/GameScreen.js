import React,{ useState, useRef, useEffect  } from 'react'
import {View,Text,StyleSheet,Button,Alert} from 'react-native'


import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors';

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
        setRounds(curRounds=>curRounds +1);
    }
    let success;
    if(currentGuess === props.userChoice){
        success = <Text>{currentGuess} is the choice you selected!!!</Text>
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" color={Colors.secondary} onPress={ nextGuessHandler.bind(this,'lower')}/>
                <Button title="Greater" color={Colors.secondary} onPress={nextGuessHandler.bind(this,'greater')}/>
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
        width : 300,
        maxWidth : '80%',
    }
}) 

export default GameScreen
