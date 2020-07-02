import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';

const GoalInput = props => {
    const handleChangeText = (text) => {
        if (text.length === 1) {
            props.setError('none')
        }
        props.setGoal(text)
    }
    return (
        <TextInput
            placeholder="Enter your GOAL!!"
            style={styles.goalInput}
            onChangeText={handleChangeText}
            value={props.goal} />
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    goalInput: {
        width: "80%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        margin: 10,
        fontSize: 20
    }
});