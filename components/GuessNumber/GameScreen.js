import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Card from '../Common/Card'
import Colors from '../../Constants/Colors'
const max = 100
const min = 1

const GenerateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        console.log(randomNum, exclude)
        return GenerateRandomBetween(min, max, exclude)
    }
    return randomNum
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState()
    const [rounds, setRounds] = useState(0)

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        setCurrentGuess(GenerateRandomBetween(min, max, userChoice))
    }, []);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds, userChoice)
        }
    }, [currentGuess, userChoice, onGameOver]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = direction => {
        if (currentGuess < userChoice && direction === "lower") {
            Alert.alert(
                'Don\'t cheat bro!',
                'Your Guess number is greater than oppenent\'s guess number',
                [{ text: "Okay", style: 'destructive' }]
            )
            return;
        }
        else if (currentGuess > userChoice && direction === "higher") {
            Alert.alert(
                'Don\'t cheat bro!',
                'Your Guess number is lower than oppenent\'s guess number',
                [{ text: "Okay", style: 'destructive' }]
            )
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else if (direction === 'higher') {
            currentLow.current = currentGuess
        }
        const nextNumber = GenerateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber)
        setRounds(currRounds => currRounds + 1)

    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Opponent's guess
            </Text>
            <View style={styles.guessContainer}>
                <Text style={styles.guess}>{currentGuess}</Text>
            </View>
            <Card style={styles.buttonContainer}>
                <Button
                    title="Higher" onPress={() => { nextGuessHandler("higher") }} />
                <Button
                    title="Lower" onPress={() => { nextGuessHandler("lower") }} />
            </Card>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    },
    title: {
        fontSize: 24,
        color: Colors.primary,
    },
    guessContainer: {
        margin: 20,
        padding: 18,
        borderColor: Colors.orange,
        borderRadius: 10,
        borderWidth: 5,
    },
    guess: {
        fontSize: 25,
        color: Colors.orange,
        fontWeight: "bold"
    }
});