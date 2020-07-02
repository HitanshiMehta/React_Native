import React, { useState } from 'react'
import { StyleSheet, View, Modal, Text } from 'react-native';
import GoalInput from './GoalInput';
import GoalButton from './GoalButton';
import GoalCancel from './GoalCancel';

const AddGoal = props => {
    const [goal, setGoal] = useState('')
    const [error, setError] = useState('none')
    return (
        <Modal visible={props.isAddMode} animationType="slide">
            <View style={styles.goalContainer}>
                <GoalInput
                    goal={goal}
                    setGoal={setGoal}
                    setError={setError}
                />
                <View style={styles.buttonContainer}>
                    <GoalButton
                        goal={goal}
                        setGoal={setGoal}
                        setCourseGoals={props.setCourseGoals}
                        setIsAddMode={props.setIsAddMode}
                        setError={setError}
                    />
                    <GoalCancel
                        setGoal={setGoal}
                        setIsAddMode={props.setIsAddMode}
                    />
                </View>
                <View style={{ display: error }}>
                    <Text style={styles.error}>Hey!! Please enter goal.</Text>
                </View>
            </View>
        </Modal>
    );
}

export default AddGoal;

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
        width: "40%"
    },
    error: {
        fontSize: 18,
        color: "#c93322",
        fontWeight: "bold"
    }
});