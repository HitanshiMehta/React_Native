import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Card from '../Common/Card';
import Colors from '../../Constants/Colors'
import Input from '../Common/Input';

const StartGameScreen = props => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    let confirmedOutput;
    const numberInputHandler = inputText => {
        setNumber(inputText.replace(/[^0-9]/g, ''));
    }
    const handleReset = () => {
        setNumber('');
        setConfirmed('')
        confirmedOutput = ""
    }

    const handleConfirm = () => {
        const chosenNumber = parseInt(number)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Guess number has to be a number between 1 to 99.',
                [{ text: "Okay", style: 'destructive', onPress: handleReset }]
            )
            return;
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(number))
        setNumber('')
        Keyboard.dismiss();
    }
    const handleStartGame = () => {
        props.startGame(selectedNumber)
    }

    if (confirmed) {
        confirmedOutput =
            <View style={styles.numberContainer}>
                <Text style={styles.confirmMessage}>You selected </Text>
                <Text style={styles.confirmNumber}>{selectedNumber}</Text>
                <View style={styles.startGame}>
                    <Button title="Start Game" onPress={handleStartGame} />
                </View>
            </View>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number:</Text>
                    <Input
                        keyboardType="number-pad"
                        maxLength={2}
                        style={styles.input}
                        blurOnSubmit
                        onChangeText={numberInputHandler}
                        value={number}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button
                                title="Reset"
                                color={Colors.secondary}
                                onPress={handleReset} />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                color={Colors.primary}
                                onPress={handleConfirm} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20
    },
    button: {
        width: 90,
    },
    input: {
        width: 70,
        fontSize: 23,
        textAlign: "center"
    },
    numberContainer: {
        padding: 30,
    },
    confirmMessage: {
        color: Colors.secondary,
        fontSize: 20,
        fontWeight: "bold"
    },
    confirmNumber: {
        color: Colors.primary,
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center"
    },
    startGame:{
        marginTop:15    
    }
})
