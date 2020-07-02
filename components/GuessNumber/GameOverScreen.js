import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
    const { numberOfGuess, userChoice, handleReStart } = props
    return (
        <View style={styles.screen}>
            <Text>
                The Game is Over!
            </Text>
            <Text>
                Opponent's take {numberOfGuess} rounds to guess your correct number!
            </Text>
            <Text>
                Number was {userChoice}
            </Text>
            <Button title="Re-start" onPress={handleReStart} />
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});