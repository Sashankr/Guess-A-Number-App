import React,{useState} from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {

  const [userNumber,setUserNumber] = useState()
  const [guessRounds,setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
    setGuessRounds(0);
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  } 

  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null) 
  }

  let content = <StartGameScreen onStartGame ={startGameHandler} />
  if(userNumber && guessRounds <=0 ){
    content = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler}  />
  }
  else if(guessRounds > 0){
    content =  <GameOverScreen rounds ={guessRounds} userNumber={userNumber} resetGame={configureNewGameHandler}/>
  }

  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular' : require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold' : require('./assets/fonts/Inter-SemiBold.ttf'),
  })
  
  if(!fontsLoaded){
    return <AppLoading />
  }
  else {
    return  (
    <SafeAreaView style={styles.screen}>
      <Header  heading = {"Guess a number"}/>
      {content}
    </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    paddingTop : 25,
  },
});
