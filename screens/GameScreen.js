import React,{ useState, useRef, useEffect  } from 'react'
import {View,Text,StyleSheet,ScrollView,Alert,Dimensions} from 'react-native'

import BodyText from '../components/BodyText';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons'
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

const renderListItem = (value,numOfRound) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
     </View>)

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1,100,props.userChoice)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [pastGuesses,setPastGuesses] = useState([initialGuess])
    const [rounds,setRounds] = useState(0);

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice,onGameOver} = props
    const listContainerStyle = styles.listContainer
    if(Dimensions.get('window').height > 600){
        listContainerStyle = styles.listContainerMobile;
    }

    useEffect(()=>{
        if(currentGuess === props.userChoice){
            props.onGameOver(pastGuesses.length);
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
             currentLow.current = currentGuess + 1;
         }
        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds +1);
        setPastGuesses(curPastGuesses => [nextNumber,...curPastGuesses])
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
            <BodyText style={styles.listHeading}>Guess List</BodyText>
            <View style={styles.listContainer}>
            <ScrollView>
                {pastGuesses.map((guess,index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView>
            </View>
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
        marginTop : Dimensions.get('window').height > 600 ? 20 : 10,
        width : 500,
        maxWidth : '90%',
    },
    guess : {
        marginVertical : 20,
        fontSize : 18,
        textTransform : 'uppercase',
    },
    listItem : {
        borderColor : Colors.primary,
        borderWidth : 1,
        padding : 15,
        marginVertical : 10,
        backgroundColor : Colors.secondary,
        flexDirection : 'row',
        justifyContent : 'space-around',
        flex : 1,
    },
    listContainer : {
        width : '80%',
        flex : 1,
    },
    listContainerMobile : {
        width : '60%',
        flex : 1,
    },
    listHeading : {
        fontSize : 16,
        textTransform : 'uppercase',
        letterSpacing : 3,
    }


}) 

export default GameScreen
