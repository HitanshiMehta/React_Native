import React from 'react';
import { Button, View } from 'react-native';

const Goalnput = props => {
    const handleGoalPress = () => {
        if (props.goal.length === 0) {
            props.setError('flex')
            return;
        }
        props.setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: props.goal }])
        props.setGoal('')
        props.setIsAddMode(false)
    }
    return (
        <View style={{ width: "60%", margin: 10 }}>
            <Button title="Add" onPress={handleGoalPress} />
        </View>
    );
}

export default Goalnput;