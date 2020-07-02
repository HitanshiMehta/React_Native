import React, { useState, useEffect } from 'react';
import Header from './Header';
import { View, StyleSheet } from 'react-native'
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen'

const Home = () => {
    const [content, setContent] = useState()

    useEffect(() => {
        setContent(<StartGameScreen startGame={startGame} />)
    }, [])

    // Called from startGameScreen
    const startGame = selectedNumber => {
        setContent(
            <GameScreen
                userChoice={selectedNumber}
                onGameOver={gameOverHandler} />
        )
    }

    // Called from GameScreen
    const gameOverHandler = (numberOfGuess, userChoice) => {
        setContent(
            <GameOverScreen
                handleReStart={handleReStartGame}
                numberOfGuess={numberOfGuess}
                userChoice={userChoice} />)
    }

    // Called from GameOverScreen
    const handleReStartGame = () => {
        setContent(<StartGameScreen startGame={startGame} />)
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess a number" />
            {content}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})