import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={()=>props.onDelete(props.goal.uid)}>
            <View style={styles.goalItem} >
                <Text>{props.goal.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});