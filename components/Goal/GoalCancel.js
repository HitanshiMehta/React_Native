import React from 'react';
import { Button, View } from 'react-native';

const GoaCancel = props => {
    const handleCancelPress = () => {
        props.setGoal('')
        props.setIsAddMode(false)
    }
    return (
        <View style={{ width: "60%", margin: 10 }}>
            <Button title="Cancel" color="red" onPress={handleCancelPress} />
        </View>
    );
}

export default GoaCancel;